import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Confirmation, { ConfirmationParams } from '../screens/Confirmation'
import SavePlant, { SavePlantParams } from '../screens/SavePlant'
import UserIdentification from '../screens/UserIdentification'
import PlantSelect from '../screens/PlantSelect'
import Welcome from '../screens/Welcome'

import colors from '../styles/colors'
import BottomTabRoutes from './bottomTab.routes'

export type RootStackParamsList = {
  Welcome: undefined
  UserIdentification: undefined
  Confirmation: ConfirmationParams
  PlantSelect: undefined
  PlantSelectStack: undefined
  SavePlant: SavePlantParams
  MyPlants: undefined
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
    initialRouteName="Welcome"
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
      component={BottomTabRoutes}
      options={{ gestureEnabled: false }}
    />

    <StackNavigator.Screen
      name="PlantSelectStack"
      component={PlantSelect}
      options={{ gestureEnabled: false }}
    />

    <StackNavigator.Screen
      name="SavePlant"
      component={SavePlant}
    />

    <StackNavigator.Screen
      name="MyPlants"
      component={BottomTabRoutes}
      options={{ gestureEnabled: false }}
    />

  </StackNavigator.Navigator>
)

export default StackRoutes