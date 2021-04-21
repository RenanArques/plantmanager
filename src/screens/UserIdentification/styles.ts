import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 50,
    paddingBottom: 56
  },
  wrapper: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 16
  },
  form: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center'
  },
  title: {
    color: colors.heading,
    fontSize: 24,
    fontFamily: fonts.heading,
    lineHeight: 32,
    textAlign: 'center',
    marginTop: 24
  },
  nameInput: {
    width: "100%",
    color: colors.inputTextColor,
    textAlign: 'center',
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 23,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    marginHorizontal: 56,
    marginVertical: 40,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 16
  }
})

export default styles