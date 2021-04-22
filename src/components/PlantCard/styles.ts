import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16
  },
  plantName: {
    color: colors.heading,
    fontFamily: fonts.complementary,
    fontSize: 13,
    lineHeight: 23,
    marginTop: 16
  }
})

export default styles