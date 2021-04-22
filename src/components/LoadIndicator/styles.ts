import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 200
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 23,
    textAlign: 'center',
    marginVertical: 40,
    marginBottom: 80,
    marginHorizontal: 70
  },
  bold: {
    fontFamily: fonts.heading,
  }
})

export default styles