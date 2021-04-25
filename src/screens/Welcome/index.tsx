import React from 'react'
import { View, SafeAreaView, Text, Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import Watering from '../../assets/Watering.svg'

import styles from './styles'

const Welcome: React.FC = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>

        <View style={styles.heroImage}>
          <Watering width="100%" height="100%" />
        </View>

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <RectButton
          style={styles.button}
          onPress={() => navigation.navigate('UserIdentification')}
        >
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </RectButton>
      </View>
    </SafeAreaView>
  )
}

export default Welcome