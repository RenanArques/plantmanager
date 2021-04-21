import React from 'react'
import { Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import styles from './styles'

interface ButtonProps extends RectButtonProps {
  enabled?: boolean
  text: string
}

const Button: React.FC<ButtonProps> = ({ enabled, text, style, ...rest }) => {
  return (
    <RectButton
      enabled={enabled === false ? false : true}
      style={[
        styles.button,
        enabled === false && { opacity: 0.5 },
        style
      ]}
      {...rest}
    >
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </RectButton>
  )
}

export default Button