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
  nextWatering,
  style,
  ...rest
}) => {
  const containerStyles = [
    style,
    nextWatering
      ? styles.containerRow
      : styles.container
  ]

  return (
    <ShapeGradient style={containerStyles}>
      <RectButton style={containerStyles} {...rest}>
        <View style={nextWatering ? styles.contentRow : styles.content}>
          <View style={nextWatering ? styles.plantSvgRow : styles.plantSvg}>
            <SvgUri width="100%" height="100%" uri={imageUrl} />
          </View>
          <Text style={nextWatering ? styles.plantNameRow : styles.plantName}>
            {name}
          </Text>
          {
            nextWatering &&
            <Text style={styles.nextWateringText}>
              Regar às {'\n'}
              <Text style={styles.bold}>{nextWatering}</Text>
            </Text>
          }
        </View>
      </RectButton>
    </ShapeGradient>
  )
}

export default PlantCard