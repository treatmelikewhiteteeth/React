import React from 'react'
import Example from './components/Example'  // 경로는 실제 위치에 맞게
import StyledButton from './componnents/StyledButton'
import ExtendingExample from './componnents/ExpendingExample'
import {ThemeProvider} from 'styled-component'
import ThemedButton from './componnents/Button'
import PrimaryTitle from './componnents/'

export default function App() {

  const theme = {
    mainColor : 'mediumseagreen',
    secondaryColor : 'teal',
  }
  return (
    <div>
      {/* <h1>안녕하세요!</h1>
      <Example />
      <StyledButton>
        일반버튼      
      </StyledButton>
      <StyledButton>
        주요버튼
      </StyledButton> */}
    <ThemeProvider theme={Theme}>
      <ThemedButton>테마 색상 버튼</ThemedButton>
    </ThemeProvider>
    </div>
  )
}