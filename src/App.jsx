import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/index'
import { Home, Templates, Login, SignUp, CV_Form, CV } from './Pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './Utils/PrivateRoute'
import 'react-toastify/dist/ReactToastify.css';



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
            <Route path='/resume/:id' element={<CV_Form />} />
            <Route path='/resume/cv' element={<CV />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
