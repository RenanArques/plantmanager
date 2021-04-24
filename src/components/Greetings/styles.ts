import { Dimensions, StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40
  },
  headerText: {
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 32,
    lineHeight: 36,
    maxWidth: Dimensions.get('window').width - ((32 * 2) + 56 + 16)
  },
  bold: {
    fontFamily: fonts.heading
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 100,
    marginTop: 2
  },
})

export default styles