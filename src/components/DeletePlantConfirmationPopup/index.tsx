import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BlurView } from 'expo-blur'
import { SvgUri } from 'react-native-svg'
import { RectButton } from 'react-native-gesture-handler'

import ShapeGradient from '../ShapeGradient'

import { ReturnStoragePlant } from '../../libs/storage'

import styles from './styles'

interface DeletePlantConfirmationPopupProps {
  plant: ReturnStoragePlant
  onConfirm: () => void
  onCancel: () => void
}

const DeletePlantConfirmationPopup: React.FC<
  DeletePlantConfirmationPopupProps
> = ({ plant, onConfirm, onCancel }) => {
  return (
    <BlurView intensity={60} tint={'dark'} style={StyleSheet.absoluteFill}>
      <View style={styles.container}>
        <View style={styles.confirmationBox}>
          <ShapeGradient style={styles.plantImage}>
            <SvgUri width="100%" height="100%" uri={plant.photo} />
          </ShapeGradient>

          <Text style={styles.text}>
            Deseja mesmo deletar sua {''}
            <Text style={styles.bold}>{plant.name}</Text>?
        </Text>

          <View style={styles.options}>
            <ShapeGradient style={styles.buttonWrapper}>
              <RectButton
                onPress={onCancel}
                style={styles.button}
              >
                <Text style={styles.buttonText}>
                  Cancelar
                </Text>
              </RectButton>
            </ShapeGradient>

            <ShapeGradient isRed style={styles.buttonWrapper}>
              <RectButton
                onPress={onConfirm}
                style={styles.button}
              >
                <Text style={[styles.buttonText, styles.redButtonText]}>
                  Deletar
                </Text>
              </RectButton>
            </ShapeGradient>
          </View>
        </View>
      </View>
    </BlurView>
  )
}

export default DeletePlantConfirmationPopup