import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#11111170',
    zIndex: 100
  },
  confirmationBox: {
    backgroundColor: colors.background,
    alignItems: 'center',
    padding: 32,
    marginHorizontal: 55,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.30,
    shadowRadius: 50,
    elevation: 25
  },
  plantImage: {
    width: 120,
    height: 120,
    padding: 16,
    borderRadius: 20
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 25,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 24
  },
  bold: {
    fontFamily: fonts.heading,
  },
  options: {
    maxWidth: "100%",
    flexDirection: 'row',
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 12
  },
  button: {
    borderRadius: 12,
    justifyContent: 'center',
    height: 48
  },
  buttonText: {
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center'
  },
  redButtonText: {
    color: colors.red
  }
})

export default styles