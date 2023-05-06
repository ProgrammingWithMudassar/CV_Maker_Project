import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/index'
import { Home, Templates, ResumeBuilder, Login, SignUp } from './Pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './Utils/PrivateRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{ width: '100%', overflow: 'hidden', textAlign: 'center' }}>
      <Router>
        <Navbar />
        <Routes>
          {/* PublicRoutes  */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signUp' element={<SignUp />} />

          {/* PrivateRoute   */}
          <Route path='/' element={<PrivateRoute />} >
            <Route exact path='/resume' element={<Templates />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
