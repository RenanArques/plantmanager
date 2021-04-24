import React, { useState, useEffect } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  FlatList
} from 'react-native'
import { formatDistanceToNow } from 'date-fns'
import { pt } from 'date-fns/locale'
import { useNavigation } from '@react-navigation/native'

import WateringInformation from '../../components/WateringInformation'
import LoadIndicator from '../../components/LoadIndicator'
import PlantCard from '../../components/PlantCard'
import Greetings from '../../components/Greetings'

import { getPlants, ReturnStoragePlant } from '../../libs/storage'

import styles from './styles'

const PlantSelect: React.FC = () => {
  const [myPlants, setMyPlants] = useState<ReturnStoragePlant[]>()

  const navigation = useNavigation()

  useEffect(() => {
    async function fetchMyPlants() {
      const data = await getPlants()

      setMyPlants(data)
    }

    fetchMyPlants()
  }, [])

  if (!myPlants) return <LoadIndicator />

  const nextTime = formatDistanceToNow(
    new Date(myPlants[0].nextNotificationDate).getTime(),
    { locale: pt }
  )

  return (
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
              onPressDeleteButton={() => { }}
              onPress={() => { }}
            />
          </View>
        )}
      />

    </SafeAreaView>
  )
}

export default PlantSelect