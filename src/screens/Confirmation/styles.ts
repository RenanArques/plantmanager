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
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  content: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    color: colors.heading,
    fontSize: 24,
    fontFamily: fonts.heading,
    lineHeight: 32,
    textAlign: 'center',
    marginTop: 64
  },
  subtitle: {
    color: colors.heading,
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    marginVertical: 16
  },
  footer: {
    width: "100%",
    paddingHorizontal: 56
  }
})

export default styles