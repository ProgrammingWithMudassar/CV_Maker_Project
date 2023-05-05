import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/index'
import { Home, Templates, ResumeBuilder, Login, SignUp } from './Pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{ width: '100%', overflow: 'hidden', textAlign: 'center' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/resume' element={<Templates />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signUp' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
