import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '105%',
    paddingTop: 46,
    paddingBottom: 16
  },
  header: {
    width:  '100%',
    paddingHorizontal: 32,
    paddingVertical: 16
  },
  greetings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40
  },
  headerText: {
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 32,
    lineHeight: 36
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
  title: {
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 23
  },
  environmentsList: {
    minHeight: 56,
    maxHeight: 56,
    paddingVertical: 8,
    paddingLeft: 28
  },
  environmentsListFooter: {
    width: 56,
    height: 56,
  },
  plantsList: {
    padding: 24,
    paddingBottom: 56
  }
})

export default styles