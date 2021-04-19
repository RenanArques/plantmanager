import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Welcome from './src/screens/Welcome'

const App: React.FC = () => {
  return (
    <>
      <StatusBar style='auto' />
      <Welcome />
    </>
  )
}

export default App