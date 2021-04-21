import React, { useState } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Button from '../../components/Button'

import Emoji from '../../assets/emojis/Emoji-1.svg'
import EmojiFilled from '../../assets/emojis/Emoji-2.svg'

import colors from '../../styles/colors'

import styles from './styles'

const UserIdentification: React.FC = () => {
  const [name, setName] = useState('')
  const [focused, setFocused] = useState(false)

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.form}>
            <View style={styles.header}>
              {name ? <EmojiFilled /> : <Emoji />}

              <Text style={styles.title}>
                Como podemos chamar você?
              </Text>
            </View>

            <TextInput
              placeholder="Digite um nome"
              placeholderTextColor={colors.placeholderTextColor}
              textContentType="name"
              autoCapitalize="words"
              autoCorrect={false}
              maxLength={40}
              value={name}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChangeText={(text) => setName(text)}
              style={[
                styles.nameInput,
                (name || focused) ? { borderBottomColor: colors.green } : {}
              ]}
            />

            <View style={styles.footer}>
              <Button
                text="Confirmar"
                enabled={name ? true : false}
                onPress={() => navigation.navigate('Confirmation')}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView >
  )
}

export default UserIdentification