import React, { useState } from 'react'
import StartScreen from './StartScreen'
import WorkoutScreen from './WorkoutScreen'

const App = () => {
  const [started, setStarted] = useState(false)
  return !started ? (
    <StartScreen onStart={() => setStarted(true)} />
  ) : (
    <WorkoutScreen onStop={() => setStarted(false)} />
  )
}

export default App
