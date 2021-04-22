import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    borderRadius: 10
  },
  buttonText: {
    color: colors.heading,
    fontFamily: fonts.complementary,
    fontSize: 13,
    lineHeight: 23
  },
  textActive: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  },
  active: {
    backgroundColor: colors.green_light,
    borderRadius: 10
  }
})

export default styles