import axios from 'axios'

export interface Environment {
  key: string
  title: string
}

export interface Plant {
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
}

const api = axios.create({
  baseURL: 'http://192.168.100.80:3333/'
})

export default api