import React from 'react'
import { Text } from 'react-native'
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'

import WateringIcon from '../../assets/WaterDrop.svg'

import colors from '../../styles/colors'

import styles from './styles'

interface WateringInformationProps extends Omit<LinearGradientProps, 'colors'> {
  text: string
}

const WateringInformation: React.FC<WateringInformationProps> = ({
  text,
  style,
  ...rest
}) => {
  return (
    <LinearGradient
      start={{ x: 0.4, y: 0 }}
      end={{ x: 0.6, y: 1 }}
      colors={colors.blue_light}
      style={[style, styles.container]}
      {...rest}
    >
      <WateringIcon />
      <Text style={styles.text}>
        {text}
      </Text>
    </LinearGradient>
  )
}

export default WateringInformation