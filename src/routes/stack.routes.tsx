import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../screens/Welcome'
import UserIdentification from '../screens/UserIdentification'
import Confirmation from '../screens/Confirmation'

import colors from '../styles/colors'

const StackNavigator = createStackNavigator()

const StackRoutes: React.FC = () => (
  <StackNavigator.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >

    <StackNavigator.Screen name="Welcome" component={Welcome} />

    <StackNavigator.Screen
      name="UserIdentification"
      component={UserIdentification}
      options={{ gestureEnabled: false }}
    />

    <StackNavigator.Screen name="Confirmation" component={Confirmation} />

  </StackNavigator.Navigator>
)

export default StackRoutes