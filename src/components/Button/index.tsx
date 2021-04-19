import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import styles from './styles'

interface ButtonProps extends RectButtonProps {
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <RectButton style={styles.container}>
      {props.children}
    </RectButton>
  )
}

export default Button