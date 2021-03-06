import AsyncStorage from '@react-native-async-storage/async-storage'
import { format, isBefore } from 'date-fns'

import { Plant } from '../services/api'
import { createNotification, removeNotification } from './notification'

export interface SavedPlant extends Plant {
  nextNotificationDate: Date
  notificationId: string
}

interface StoragePlant {
  [id: string]: {
    data: SavedPlant
  }
}

export interface ReturnStoragePlant {
  hour: string
  notificationId: string
  nextNotificationDate: Date
  id: number
  name: string
  about: string
  water_tips: string
  photo: string
  environments: string[]
  frequency: {
      times: number
      repeat_every: string
  }
}[]

export async function savePlant(
  plant: Plant,  notificationPreferredTime: Date
  ): Promise<SavedPlant> {
   try {
      const existingData = await AsyncStorage.getItem('@plant_manager:plants')

      const savedPlants = existingData 
        ? (JSON.parse(existingData) as SavedPlant)
        : {}

      
      if (isBefore(notificationPreferredTime, Date.now())) {
        notificationPreferredTime.setDate(
          notificationPreferredTime.getDate() + 1
        )
      }

      const notificationId = await createNotification(
        plant,
        notificationPreferredTime
      )
      
      const newSavedPlant: SavedPlant = {
        notificationId,
        nextNotificationDate: notificationPreferredTime,
        ...plant
      }

      const newStoragePlant: StoragePlant = {
        [newSavedPlant.id]: {
          data: newSavedPlant
        }
      }

      await AsyncStorage.setItem('@plant_manager:plants', JSON.stringify({
        ...newStoragePlant,
        ...savedPlants
      }))

      return newSavedPlant
   } catch (error) {
     throw new Error(error )
   }
}

export async function getPlants() {
   try {
      const data = await AsyncStorage.getItem('@plant_manager:plants')

      const plants = data 
        ? (JSON.parse(data) as StoragePlant)
        : {}

      const plantsShorted = Object.keys(plants).map((plant) => {
        return {
          ...plants[plant].data,
          hour: format(new Date(plants[plant].data.nextNotificationDate), 'HH:mm')
        }
      }).sort((a, b) =>
        Math.floor(
          new Date(a.nextNotificationDate).getTime() / 1000 -
          Math.floor(new Date(b.nextNotificationDate).getTime() / 1000)
        )
      )

      return plantsShorted
   } catch (error) {
     throw new Error(error)
   }
}

export async function removePlant(plant: ReturnStoragePlant) {
  try {
     const data = await AsyncStorage.getItem('@plant_manager:plants')

     if (data === null) return new Error

     const plants: StoragePlant = JSON.parse(data)

     delete plants[plant.id]

     await AsyncStorage.setItem('@plant_manager:plants', JSON.stringify(plants))

     removeNotification(plant.notificationId)

     return plants
  } catch (error) {
    throw new Error(error)
  }
}