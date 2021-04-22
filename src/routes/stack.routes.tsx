import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../screens/Welcome'
import UserIdentification from '../screens/UserIdentification'
import Confirmation from '../screens/Confirmation'
import PlantSelect from '../screens/PlantSelect'
import SavePlant, { SavePlantParams } from '../screens/SavePlant'

import colors from '../styles/colors'

export type RootStackParamsList = {
  Welcome: undefined
  UserIdentification: undefined
  Confirmation: undefined
  PlantSelect: undefined
  SavePlant: SavePlantParams
}

const StackNavigator = createStackNavigator<RootStackParamsList>()

const StackRoutes: React.FC = () => (
  <StackNavigator.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
    initialRouteName="PlantSelect"
  >

    <StackNavigator.Screen
      name="Welcome"
      component={Welcome}
      options={{ gestureEnabled: false }}
    />

    <StackNavigator.Screen
      name="UserIdentification"
      component={UserIdentification}
    />

    <StackNavigator.Screen
      name="Confirmation"
      component={Confirmation}
    />

    <StackNavigator.Screen
      name="PlantSelect"
      component={PlantSelect}
      options={{ gestureEnabled: false }}
    />

    <StackNavigator.Screen
      name="SavePlant"
      component={SavePlant}
    />

  </StackNavigator.Navigator>
)

export default StackRoutes