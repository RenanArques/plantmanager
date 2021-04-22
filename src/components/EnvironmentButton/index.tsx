import React from 'react'
import { Text, StyleProp, TextStyle } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import ShapeGradient from '../ShapeGradient'

import styles from './styles'

interface ButtonProps extends RectButtonProps {
  text: string
  active?: boolean
  textStyle?: StyleProp<TextStyle>
}

const EnvironmentButton: React.FC<ButtonProps> = ({
  text,
  active,
  textStyle,
  style,
  ...rest
}) => {
  return (
    <ShapeGradient
      style={[
        style,
        styles.button,
        active && styles.active
      ]}
    >
      <RectButton
        style={[
          style,
          styles.button,
          active && styles.active
        ]}
        {...rest}
      >
        <Text
          style={[
            textStyle,
            styles.buttonText,
            active && styles.textActive
          ]}
        >
          {text}
        </Text>
      </RectButton>
    </ShapeGradient>
  )
}

export default EnvironmentButton