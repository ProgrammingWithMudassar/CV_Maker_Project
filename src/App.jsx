import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button'
import {
  Home,About
} from './Components/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Well Mudassar G.
      <Button variant="contained" color="primary">
        click me
      </Button>
      <Home />
      <About />
    </div>
  )
}

export default App
