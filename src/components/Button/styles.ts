import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonText: {
    color: colors.white,
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 23,
    textAlign: 'center',
    paddingHorizontal: 38,
    paddingVertical: 16
  }
})

export default styles