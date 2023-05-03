import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/index'
import { Home, Templates } from './Pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{width:'100%',overflow:'hidden',textAlign:'center'}}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/resume' element={<Templates />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
