import React, { useState } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native'

import Button from '../../components/Button'

import Emoji from '../../assets/emojis/Emoji-3.svg'

import styles from './styles'

const Confirmation: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Emoji />

          <Text style={styles.title}>
            Prontinho
          </Text>

          <Text style={styles.subtitle}>
            Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
          </Text>
        </View>

        <View style={styles.footer}>
          <Button text="Começar" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Confirmation