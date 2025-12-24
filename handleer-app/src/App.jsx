import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/Box/Box'

function App() {
  
  return (
    <div style = {{padding : 20}}>
      <Box />
      <Box highlight />
      <Box fullWidth />
      <Box highlight fullWith />
    </div>
  )
}
export default App
