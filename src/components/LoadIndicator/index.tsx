import React from 'react'
import { View, Text } from 'react-native'
import LottiePlayer from 'lottie-react-native'

import loadingAnimation from '../../assets/load.json'

import styles from './styles'

const LoadIndicator: React.FC = () => {
  return (
    <View style={styles.container}>
      <LottiePlayer
        source={loadingAnimation}
        style={styles.animation}
        cacheStrategy="strong"
        autoPlay
        loop
      />

      <Text style={styles.text}>
        <Text style={styles.bold}>Aguarde</Text>
        , suas informações estão sendo carregadas...
      </Text>
    </View>
  )
}

export default LoadIndicator