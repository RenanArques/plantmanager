import React, { useEffect, useState } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native'
import { SvgUri } from 'react-native-svg'
import { format } from 'date-fns'
import { LinearGradient } from 'expo-linear-gradient'
import DateTimePicker from '@react-native-community/datetimepicker'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import ShapeGradient from '../../components/ShapeGradient'

import { RootStackParamsList } from '../../routes/stack.routes'
import { Plant } from '../../services/api'

import WateringIcon from '../../assets/WaterDrop.svg'

import colors from '../../styles/colors'

import styles from './styles'
import Button from '../../components/Button'

type SavePlantScreenRouteProp = RouteProp<
  RootStackParamsList,
  'SavePlant'
>

type SavePlantScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'SavePlant'
>

export interface SavePlantParams {
  plant: Plant
}

interface SavePlantProps extends React.FC {
  route: SavePlantScreenRouteProp
  navigation: SavePlantScreenNavigationProp
}

const SavePlant: React.FC<SavePlantProps> = ({ route }) => {
  const [wateringInformationHeight, setWateringInformationHeight] = useState(0)
  const [plantInformationHeight, setPlantInformationHeight] = useState(0)
  const [footerHeight, setFooterHeight] = useState(0)
  const [imageHeight, setImageHeight] = useState(0)
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')
  const [update, setUpdate] = useState(false)
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if ((plantInformationHeight === 0) && (footerHeight === 0)) {
      setTimeout(() => { setUpdate(!update) }, 130)
    } else {
      setImageHeight(
        Dimensions.get('window').height - (footerHeight + plantInformationHeight)
      )
    }
  }, [update])

  const plant = route.params.plant

  return (
    <View style={styles.container}>
      <View onLayout={({ nativeEvent }) => {
        setPlantInformationHeight(
          Number(nativeEvent.layout.height)
        )
      }}>

        <View style={[
          styles.plantBackgroundWrapper,
          { paddingBottom: wateringInformationHeight / 2 }
        ]}>
          <ShapeGradient style={styles.plantBackground} />
        </View>

        <SafeAreaView style={styles.contentWrapper}>

          <SvgUri
            width={Dimensions.get('window').width}
            height={imageHeight}
            uri={plant.photo}
          />

          <View style={styles.plantInformation}>
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

      <SafeAreaView
        style={styles.footer}
        onLayout={({ nativeEvent }) => {
          setFooterHeight(
            Number(nativeEvent.layout.height)
          )
        }}
      >
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
              value={time}
              onChange={(event, time) => {
                if (Platform.OS === 'android') {
                  setShowDatePicker(oldState => !oldState)
                }

                if (time) setTime(time)
              }}
            />
          }
          {
            Platform.OS === 'android' &&
            <TouchableOpacity
              style={styles.timePickerAndroid}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.timePickerAndroidText}>
                {format(time, 'HH:mm')}
              </Text>
            </TouchableOpacity>
          }
        </View>

        <Button text="Cadastrar planta" />
      </SafeAreaView>
    </View>
  )
}

export default SavePlant