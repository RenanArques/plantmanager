import React from 'react'
import { SafeAreaView, Text, Dimensions } from 'react-native'

import Button from '../../components/Button'

import Watering from '../../assets/Watering.svg'
import Arrow from '../../assets/icons/Arrow.svg'

import styles from './styles'

const Welcome: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>

      <Watering width={Dimensions.get('window').width - 42 * 2} />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <Button onPress={() => { }}>
        <Arrow />
      </Button>
    </SafeAreaView>
  )
}

export default Welcome