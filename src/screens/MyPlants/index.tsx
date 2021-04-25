import React, { useState, useEffect } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  FlatList
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MyPlantsProps } from '../../routes/@types/MyPlants'
import { formatDistanceToNow } from 'date-fns'
import { pt } from 'date-fns/locale'

import DeletePlantConfirmationPopup from '../../components/DeletePlantConfirmationPopup'
import WateringInformation from '../../components/WateringInformation'
import LoadIndicator from '../../components/LoadIndicator'
import PlantCard from '../../components/PlantCard'
import Greetings from '../../components/Greetings'

import { removePlant, getPlants, ReturnStoragePlant } from '../../libs/storage'

import styles from './styles'

export interface MyPlantsParams {
  setTabBarVisible: (visible: boolean) => void
}

const MyPlants: React.FC<MyPlantsProps> = ({ route }) => {
  const [myPlants, setMyPlants] = useState<ReturnStoragePlant[]>()
  const [plantToDelete, setPlantToDelete] = useState<ReturnStoragePlant>()

  const navigation = useNavigation()

  const { setTabBarVisible } = route.params

  navigation.addListener('focus', () => fetchMyPlants())

  async function fetchMyPlants() {
    const data = await getPlants()

    if (data[0] == undefined) {
      return navigation.navigate('PlantSelectStack')
    }

    setMyPlants(data)
  }

  async function handleDeletePlant(plantToDelete: ReturnStoragePlant) {
    await removePlant(plantToDelete)

    fetchMyPlants()

    setPlantToDelete(undefined)
  }

  useEffect(() => {
    if (plantToDelete) return setTabBarVisible(false)

    setTabBarVisible(true)
  }, [plantToDelete])

  useEffect(() => {
    fetchMyPlants()
  }, [])

  if (!myPlants) return <LoadIndicator />

  const nextTime = formatDistanceToNow(
    new Date(myPlants[0].nextNotificationDate).getTime(),
    { locale: pt }
  )

  return (
    <>
      <SafeAreaView style={styles.container} >
        <View style={styles.header}>
          <Greetings />

          <WateringInformation
            text={`Regue sua ${myPlants[0].name} daqui à ${nextTime}`}
            style={styles.wateringInformation}
          />

          <Text style={styles.title}>
            <Text style={styles.bold}>Próximas regadas</Text>
          </Text>
        </View>

        <FlatList
          data={myPlants}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.plantsList}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <View style={{ flex: 1, marginVertical: 8 }}>
              <PlantCard
                name={item.name}
                imageUrl={item.photo}
                nextWatering={item.hour}
                onPressDeleteButton={() => {
                  setPlantToDelete(item)
                }}
                onPress={() => { }}
              />
            </View>
          )}
        />

      </SafeAreaView>

      {
        plantToDelete &&
        <DeletePlantConfirmationPopup
          plant={plantToDelete}
          onCancel={() => setPlantToDelete(undefined)}
          onConfirm={() => handleDeletePlant(plantToDelete)}
        />
      }
    </>
  )
}

export default MyPlants