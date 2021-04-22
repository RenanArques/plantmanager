import React from 'react'
import { Text, StyleProp, TextStyle, View } from 'react-native'
import { SvgUri } from 'react-native-svg'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import ShapeGradient from '../ShapeGradient'

import styles from './styles'

interface PlantCardProps extends RectButtonProps {
  name: string
  imageUrl: string
  nextWatering?: string
}

const PlantCard: React.FC<PlantCardProps> = ({
  name,
  imageUrl,
  style,
  ...rest
}) => {
  return (
    <ShapeGradient
      style={[style, styles.container]}
    >
      <RectButton
        style={[style, styles.container]}
        {...rest}
      >
        <View style={styles.content}>
          <SvgUri width={74} height={90} uri={imageUrl} />
          <Text style={styles.plantName}>
            {name}
          </Text>
        </View>
      </RectButton>
    </ShapeGradient>
  )
}

export default PlantCard