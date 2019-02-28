import * as React from 'react'
import styled from 'styled-components'
import colors from '../colors'

const StartButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  line-height: 100%;
  text-align: center;
  font-family: inherit;
  font-size: 2em;
  background-color: ${colors.primary2};
  color: #fff;
  cursor: pointer;
`

interface IProps {
  onStart: () => void
}

const StartScreen: React.SFC<IProps> = ({ onStart }) => (
  <StartButton onClick={onStart}>Start</StartButton>
)

export default StartScreen
