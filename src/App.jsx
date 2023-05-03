import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button'
import { Home } from './Pages/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
