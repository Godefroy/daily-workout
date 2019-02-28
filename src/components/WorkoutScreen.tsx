import React, { useEffect, useState, useRef, useCallback } from 'react'
import settings from '../settings'
import { Container } from './workout/Container'
import { Timer } from './workout/Timer'
import { ButtonsContainer, StopButton, PauseButton, ResumeButton } from './workout/buttons'
import { Exercise } from './workout/Exercise'
// import Speech from 'speak-tts'

const speak = (message: string) => {
  const utterance = new SpeechSynthesisUtterance(message)
  const voices = speechSynthesis.getVoices()
  const voicesEn = voices.filter(v => /^en-/.test(v.lang))
  utterance.voice = voicesEn.length !== 0 ? voicesEn[0] : voices[0]
  speechSynthesis.speak(utterance)
}

interface IProps {
  onStop: () => void
}

const WorkoutScreen: React.SFC<IProps> = ({ onStop }) => {
  const timeoutRef = useRef(0)
  const [paused, setPaused] = useState(false)
  const [exerciseIndex, setExerciseIndex] = useState(0)
  const exerciseName = settings.exercises[exerciseIndex]
  // Remaining seconds
  const [remaining, setRemaining] = useState(settings.exerciseDuration)

  /*
  const speechRef = useRef<any>(null)
  const getSpeech = async () => {
    if (speechRef.current) return speechRef.current
    const speech = new Speech()
    await speech.init({
      volume: 1,
      lang: 'en-GB',
      rate: 1,
      pitch: 1,
      voice: 'Google UK English Female'
      // splitSentences: false
    })
    return speech
  }
  */

  const handlePause = useCallback(() => setPaused(true), [])
  const handleResume = useCallback(() => setPaused(false), [])

  // Text to speech
  useEffect(() => {
    /*
    getSpeech().then(speech =>
      speech.speak({
        text: exerciseName.replace(/-/g, ' ')
      })
    )
    */
    speak(exerciseName.replace(/-/g, ' '))
  }, [exerciseIndex])

  useEffect(() => {
    if (paused) {
      // clearTimeout(timeoutRef.current)
    } else {
      timeoutRef.current = setTimeout(() => {
        if (remaining === 0) {
          if (exerciseIndex + 1 < settings.exercises.length) {
            setExerciseIndex(exerciseIndex + 1)
            setRemaining(settings.exerciseDuration)
          } else {
            onStop()
          }
        } else {
          setRemaining(remaining - 1)
        }
      }, 1000)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [paused, remaining])

  return (
    <Container>
      <Timer>{remaining}</Timer>
      <Exercise style={{ backgroundImage: `url(images/${exerciseName}.jpg)` }} />
      <ButtonsContainer>
        <StopButton onClick={onStop}>Stop</StopButton>
        {paused ? (
          <ResumeButton onClick={handleResume}>Resume</ResumeButton>
        ) : (
          <PauseButton onClick={handlePause}>Pause</PauseButton>
        )}
      </ButtonsContainer>
    </Container>
  )
}

export default WorkoutScreen
