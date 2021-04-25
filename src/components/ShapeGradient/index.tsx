import React from 'react'
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'

import colors from '../../styles/colors'

interface ShapeGradientProps extends Omit<LinearGradientProps, 'colors'> {
  isRed?: boolean
}

const ShapeGradient: React.FC<ShapeGradientProps> = ({
  isRed,
  children,
  ...rest
}) => {
  return (
    <LinearGradient
      colors={isRed ? colors.shapeRed : colors.shape}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      {...rest}
    >
      {children}
    </LinearGradient>
  )
}

export default ShapeGradient