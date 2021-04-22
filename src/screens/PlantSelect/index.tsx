import React, { useState, useEffect } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

import EnvironmentButton from '../../components/EnvironmentButton'
import LoadIndicator from '../../components/LoadIndicator'
import PlantCard from '../../components/PlantCard'

import api, { Environment, Plant } from '../../services/api'

import styles from './styles'

const PlantSelect: React.FC = () => {
  const [selectedEnvironment, setSelectedEnvironment] = useState('all')
  const [environments, setEnvironments] = useState<Environment[]>([])
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([])
  const [plants, setPlants] = useState<Plant[]>([])
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()

  useEffect(() => {
    async function fetchUsername() {
      const username = await AsyncStorage.getItem('@plant_manager:username')

      if (username === null) return navigation.navigate('Welcome')

      setUsername(username)
    }

    fetchUsername()
  }, [])

  useEffect(() => {
    async function fetchEnvironments() {
      const { data } = await api.get('plants_environments')

      setEnvironments([{
        key: 'all',
        title: 'Todos'
      }, ...data])
    }

    fetchEnvironments()
  }, [])

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get('plants?_short=name&_order=asc')

      setPlants(data)
      setLoading(false)
    }

    fetchPlants()
  }, [])

  useEffect(() => {
    if (selectedEnvironment === 'all') return setFilteredPlants(plants)

    setFilteredPlants(plants.filter(plant =>
      plant.environments.includes(selectedEnvironment))
    )
  }, [plants, selectedEnvironment])

  if (loading) return <LoadIndicator />

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.header}>
        <View style={styles.greetings}>
          <Text style={styles.headerText}>
            Olá, {'\n'}
            <Text style={styles.bold}>{username}</Text>
          </Text>

          <Image
            style={styles.profileImage}
            source={{ uri: 'https://github.com/renanarques.png' }}
          />
        </View>
        <Text style={styles.title}>
          <Text style={styles.bold}>Em qual ambiente</Text> {'\n'}
          você quer colocar sua planta?
        </Text>
      </View>

      <FlatList
        horizontal
        data={environments}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={() => (<View />)}
        ListFooterComponentStyle={styles.environmentsListFooter}
        style={styles.environmentsList}
        keyExtractor={item => String(item.key)}
        renderItem={({ item }) => (
          <EnvironmentButton
            text={item.title}
            onPress={() => setSelectedEnvironment(item.key)}
            active={item.key === selectedEnvironment}
          />
        )}
      />

      <FlatList
        data={filteredPlants}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.plantsList}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={{ flex: 1, margin: 8 }}>
            <PlantCard
              name={item.name}
              imageUrl={item.photo}
              onPress={() => {
                navigation.navigate('SavePlant', { plant: item })
              }}
            />
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default PlantSelect