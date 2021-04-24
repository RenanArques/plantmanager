import { Dimensions, StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 154,
    borderRadius: 20
  },
  containerRow: {
    flex: 1,
    height: 80,
    borderRadius: 20
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16
  },
  contentRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16
  },
  plantSvg: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  plantSvgRow: {
    width: 40,
    height: "100%",
    marginLeft: 4
  },
  plantName: {
    color: colors.heading,
    fontFamily: fonts.complementary,
    fontSize: 13,
    lineHeight: 23,
    marginTop: 16
  },
  plantNameRow: {
    flex: 1,
    color: colors.inputTextColor,
    fontFamily: fonts.heading,
    fontSize: 17,
    lineHeight: 25,
    marginLeft: 24
  },
  nextWateringText: {
    color: colors.body_light,
    fontFamily: fonts.complementary,
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'right'
  },
  bold: {
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  deleteButton: {
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: Dimensions.get('window').width - 64,
    marginLeft: -Dimensions.get('window').width + 32 + 80,
    marginRight: 32,
    padding: 28,
    borderRadius: 20
  }
})

export default styles