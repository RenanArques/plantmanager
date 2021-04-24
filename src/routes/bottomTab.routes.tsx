import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import PlantSelect from '../screens/PlantSelect'
import MyPlants from '../screens/MyPlants'
import colors from '../styles/colors'
import { MaterialIcons } from '@expo/vector-icons'

const BottomTabNavigator = createBottomTabNavigator()

const BottomTabRoutes: React.FC = () => (
  <BottomTabNavigator.Navigator
    backBehavior={'none'}
    initialRouteName={'Minhas Plantas'}
    sceneContainerStyle={{
      backgroundColor: colors.background
    }}
    tabBarOptions={{
      activeTintColor: colors.green,
      inactiveTintColor: colors.heading,
      labelPosition: 'beside-icon',
      tabStyle: {
        alignItems: 'center'
      },
      style: {
        paddingHorizontal: 16,
        height: 88,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.10,
        shadowRadius: 50,
        elevation: 25
      }
    }}
  >

    <BottomTabNavigator.Screen
      name="Nova Planta"
      component={PlantSelect}
      options={{
        tabBarIcon: (({ size, color }) => (
          <MaterialIcons
            name='add-circle-outline'
            size={size}
            color={color}
          />
        ))
      }}
    />

    <BottomTabNavigator.Screen
      name="Minhas Plantas"
      component={MyPlants}
      options={{
        tabBarIcon: (({ size, color }) => (
          <MaterialIcons
            name='format-list-bulleted'
            size={size}
            color={color}
          />
        ))
      }}
    />

  </BottomTabNavigator.Navigator>
)

export default BottomTabRoutes