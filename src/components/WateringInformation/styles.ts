import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    padding: 16
  },
  text: {
    fontSize: 15,
    lineHeight: 23,
    color: colors.blue,
    fontFamily: fonts.text,
    marginRight: 76,
    marginLeft: 24
  },
})

export default styles