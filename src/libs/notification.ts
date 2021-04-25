import * as Notifications from 'expo-notifications'
import { AndroidNotificationPriority } from 'expo-notifications'

import { format } from 'date-fns'

import { Plant } from '../services/api'
import colors from '../styles/colors'

export async function allowsNotificationsAsync() {
  const settings = await Notifications.getPermissionsAsync()

  if (settings.granted) return

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
      priority: AndroidNotificationPriority.HIGH
    }),
  })

  return await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true
    }
  })
}


export async function createNotification(plant: Plant, notificationPreferredTime: Date) {
  const nextNotificationDate = new Date(notificationPreferredTime)

  const { times, repeat_every } = plant.frequency

  if (repeat_every === 'week') {
    const interval = Math.trunc(7 / times)

    nextNotificationDate.setDate(
      notificationPreferredTime.getDate() + interval
    )
  } else {
    nextNotificationDate.setDate(
      notificationPreferredTime.getDate() + 1
    )
  }

  const secondsToNotification = Math.abs(Math.ceil(
    (new Date().getTime() - nextNotificationDate.getTime()) / 1000
  ))

  return await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Heeey, 🌱',
      body: `Esta na hora de cuidar da sua ${plant.name}`,
      sound: true,
      priority: AndroidNotificationPriority.HIGH,
      data: { plant }
    },
    trigger: {
      seconds: secondsToNotification < 60 ? 60 : secondsToNotification,
      repeats: true
    }
  })
}

export async function removeNotification(notificationId: string) {
  await Notifications.cancelScheduledNotificationAsync(notificationId)
}