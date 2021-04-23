import React, { useState } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  Platform,
  TouchableOpacity,
  StatusBar,
  Alert
} from 'react-native'
import { SvgUri } from 'react-native-svg'
import { format } from 'date-fns'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { SavePlantProps } from '../../routes/@types/SavePlant'
import DateTimePicker from '@react-native-community/datetimepicker'

import ShapeGradient from '../../components/ShapeGradient'
import Button from '../../components/Button'

import { savePlant } from '../../libs/storage'
import { Plant } from '../../services/api'

import WateringIcon from '../../assets/WaterDrop.svg'

import colors from '../../styles/colors'

import styles from './styles'

export interface SavePlantParams {
  plant: Plant
}

const SavePlant: React.FC<SavePlantProps> = ({ route }) => {
  const [notificationPreferredTime, setNotificationPreferredTime] = useState(new Date())
  const [wateringInformationHeight, setWateringInformationHeight] = useState(0)
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')

  const navigation = useNavigation()

  const plant = route.params.plant

  async function handleSavePlant() {
    try {
      const savedPlant = await savePlant(plant, notificationPreferredTime)


    } catch (error) {
      Alert.alert('Tente novamente', 'Não foi possível salvar a planta.')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.plant}>

        <View style={[
          styles.plantBackgroundWrapper,
          { paddingBottom: wateringInformationHeight / 2 }
        ]}>
          <ShapeGradient style={styles.plantBackground} />
        </View>

        <SafeAreaView style={styles.contentWrapper}>

          <TouchableOpacity
            style={[styles.goBackButton, { top: StatusBar.currentHeight }]}
            onPress={() => navigation.goBack()}
          >
            <Feather name="chevron-left" size={28} color={colors.heading} />
          </TouchableOpacity>

          <View style={styles.plantInformation}>
            <View style={styles.plantSvg}>
              <SvgUri width="100%" height="100%" uri={plant.photo} />
            </View>
            <Text style={styles.title}>{plant.name}</Text>
            <Text style={styles.subtitle}>{plant.about}</Text>
          </View>

          <LinearGradient
            start={{ x: 0.4, y: 0 }}
            end={{ x: 0.6, y: 1 }}
            colors={colors.blue_light}
            style={styles.wateringInformation}
            onLayout={({ nativeEvent }) => {
              setWateringInformationHeight(
                Number(nativeEvent.layout.height)
              )
            }}
          >
            <WateringIcon />
            <Text style={styles.wateringInformationText}>
              {plant.water_tips}
            </Text>
          </LinearGradient>

        </SafeAreaView>

      </View>

      <SafeAreaView style={styles.footer}>
        <Text style={styles.footerText}>
          Escolha o melhor horário para ser lembrado:
        </Text>

        <View style={styles.timePicker}>
          {
            showDatePicker &&
            <DateTimePicker
              mode="time"
              is24Hour={true}
              display="spinner"
              style={{ height: 130 }}
              value={notificationPreferredTime}
              onChange={(_, time) => {
                if (Platform.OS === 'android') {
                  setShowDatePicker(oldState => !oldState)
                }

                if (time) setNotificationPreferredTime(time)
              }}
            />
          }
          {
            Platform.OS === 'android' &&
            <TouchableOpacity
              style={styles.timePickerAndroidContainer}
              onPress={() => setShowDatePicker(true)}
            >
              <View style={styles.timePickerAndroid}>
                <Text style={styles.timePickerAndroidText}>
                  {format(notificationPreferredTime, 'HH:mm')}
                </Text>
              </View>
            </TouchableOpacity>
          }
        </View>

        <Button text="Cadastrar planta" onPress={handleSavePlant} />
      </SafeAreaView>
    </View>
  )
}

export default SavePlant