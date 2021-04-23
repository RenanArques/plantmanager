import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  plantBackgroundWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  plantBackground: {
    flex: 1,
    width: '100%'
  },
  contentWrapper: {
    flex: 1,
    paddingTop: 52,
    zIndex: 1
  },
  goBackButton: {
    position: 'absolute',
    padding: 16,
    paddingRight: 36,
    paddingBottom: 36,
    zIndex: 2
  },
  plant: {
    flex: 1,
  },
  plantInformation: {
    flex: 1,
    marginHorizontal: 32,
    marginBottom: 16
  },
  plantSvg: {
    flex: 1,
    padding: 16
  },
  title: {
    color: colors.heading,
    fontSize: 24,
    lineHeight: 32,
    fontFamily: fonts.heading,
    textAlign: 'center',
    marginTop: 16
  },
  subtitle: {
    color: colors.heading,
    fontSize: 17,
    lineHeight: 25,
    textAlign: 'center',
    fontFamily: fonts.text,
    marginVertical: 16
  },
  wateringInformation: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 32,
    padding: 16
  },
  wateringInformationText: {
    fontSize: 15,
    lineHeight: 23,
    color: colors.blue,
    fontFamily: fonts.text,
    marginRight: 76,
    marginLeft: 24
  },
  footer: {
    marginHorizontal: 32,
    paddingBottom: 36
  },
  footerText: {
    color: colors.heading,
    fontSize: 13,
    lineHeight: 23,
    textAlign: 'center',
    fontFamily: fonts.complementary,
    marginBottom: 16,
    marginTop: 24
  },
  timePicker: {
    marginBottom: 32
  },
  timePickerAndroidContainer: {
    padding: 26,
    marginHorizontal: 30,
  },
  timePickerAndroid: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  timePickerAndroidText: {
    color: colors.inputTextColor,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: fonts.text,
    lineHeight: 32
  }
})

export default styles