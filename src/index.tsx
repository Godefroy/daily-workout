import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'

// Hack: init speech synthesis to preload voices
speechSynthesis.getVoices()

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
