import React, { useEffect, useState } from 'react'
import { Text, View, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

const Greetings: React.FC = () => {
  const [username, setUsername] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    async function fetchUsername() {
      const username = await AsyncStorage.getItem('@plant_manager:username')

      if (username === null) return navigation.navigate('Welcome')

      setUsername(username)
    }

    fetchUsername()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Olá, {'\n'}
        <Text style={styles.bold}>{username}</Text>
      </Text>

      <Image
        style={styles.profileImage}
        source={{ uri: 'https://github.com/renanarques.png' }}
      />
    </View>
  )
}

export default Greetings