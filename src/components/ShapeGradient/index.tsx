import React from 'react'
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'

import colors from '../../styles/colors'

const ShapeGradient: React.FC<Omit<LinearGradientProps, 'colors'>> = ({
  children,
  ...rest
}) => {
  return (
    <LinearGradient
      colors={colors.shape}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      {...rest}
    >
      {children}
    </LinearGradient>
  )
}

export default ShapeGradient