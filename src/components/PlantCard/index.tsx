import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { SvgUri } from 'react-native-svg'
import { RectButton, RectButtonProps, Swipeable } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import ShapeGradient from '../ShapeGradient'

import styles from './styles'
import colors from '../../styles/colors'

interface PlantCardProps extends RectButtonProps {
  name: string
  imageUrl: string
  nextWatering?: string
  onPressDeleteButton?: () => void
}

const PlantCard: React.FC<PlantCardProps> = ({
  name,
  imageUrl,
  nextWatering,
  onPressDeleteButton,
  style,
  ...rest
}) => {
  const row = Boolean(nextWatering)

  const DeleteButton = () => (
    <RectButton
      onPress={onPressDeleteButton}
      style={styles.deleteButton}
    >
      <Feather name="trash" color={colors.white} size={26} />
    </RectButton>
  )

  const containerStyles = [
    style,
    row
      ? styles.containerRow
      : styles.container
  ]

  return (
    <Swipeable
      renderRightActions={row ? DeleteButton : undefined}
      overshootFriction={row ? 8 : undefined}
      friction={row ? 1.5 : undefined}
    >
      <ShapeGradient
        style={
          row
            ? [containerStyles, { marginHorizontal: 32 }]
            : containerStyles
        }
      >
        <RectButton style={containerStyles} {...rest}>
          <View style={row ? styles.contentRow : styles.content}>
            <View style={row ? styles.plantSvgRow : styles.plantSvg}>
              <SvgUri width="100%" height="100%" uri={imageUrl} />
            </View>
            <Text style={row ? styles.plantNameRow : styles.plantName}>
              {name}
            </Text>
            {
              row &&
              <Text style={styles.nextWateringText}>
                Regar às {'\n'}
                <Text style={styles.bold}>{nextWatering}</Text>
              </Text>
            }
          </View>
        </RectButton>
      </ShapeGradient>
    </Swipeable>
  )
}

export default PlantCard