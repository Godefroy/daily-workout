import styled from 'styled-components'
import colors from '../../colors'

export const ButtonsContainer = styled.div`
  display: flex;
`

const Button = styled.button`
  flex: 1;
  height: 80px;
  border: none;
  line-height: 100%;
  text-align: center;
  font-family: inherit;
  font-size: 1.5em;
  color: #fff;
  outline: none;
  cursor: pointer;
`

export const StopButton = styled(Button)`
  background-color: ${colors.secondary2_2};
`

export const PauseButton = styled(Button)`
  background-color: ${colors.secondary1_2};
`

export const ResumeButton = styled(Button)`
  background-color: ${colors.primary2};
`
