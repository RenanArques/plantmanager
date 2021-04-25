import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 46,
    paddingBottom: 16
  },
  header: {
    width:  '100%',
    paddingHorizontal: 32,
    paddingVertical: 16
  },
  wateringInformation: {
    marginBottom: 40
  },
  bold: {
    fontFamily: fonts.heading
  },
  title: {
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 24,
    lineHeight: 32
  },
  plantsList: {
    paddingBottom: 56
  }
})

export default styles