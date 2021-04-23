import React from 'react'
import {
  View,
  SafeAreaView,
  Text
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ConfirmationProps } from '../../routes/@types/Confirmation'

import Button from '../../components/Button'

import Smile from '../../assets/emojis/Emoji-3.svg'
import Hug from '../../assets/emojis/Emoji-4.svg'

import styles from './styles'

export interface ConfirmationParams {
  title: string,
  subtitle: string,
  buttonText: string,
  icon: 'smile' | 'hug',
  nextScreen: string
}

const Confirmation: React.FC<ConfirmationProps> = ({ route }) => {
  const navigation = useNavigation()

  const {
    icon,
    title,
    subtitle,
    buttonText,
    nextScreen
  } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          {
            icon === 'smile'
              ? <Smile />
              : <Hug />
          }
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.footer}>
          <Button
            text={buttonText}
            onPress={() => navigation.navigate(nextScreen)}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Confirmation