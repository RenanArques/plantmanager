import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 56
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 16
  },
  title: {
    color: colors.heading,
    fontSize: 32,
    fontFamily: fonts.heading,
    lineHeight: 38,
    textAlign: 'center',
    marginTop: 38
  },
  heroImage: {
    flex: 1,
    width: '100%',
    margin: 16
  },
  subtitle: {
    color: colors.heading,
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 36,
    marginTop: 24,
    height: 56,
    width: 56
  },
  buttonIcon: {
    fontSize: 32,
    color: colors.white
  }
})

export default styles