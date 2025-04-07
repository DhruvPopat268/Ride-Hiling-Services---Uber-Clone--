import React, { useEffect } from 'react'
import { Route , Routes} from  'react-router-dom';
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'

const App = () => {
  
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/UserSignup' element={<UserSignup/>}/>
      <Route path='/UserLogin' element={<UserLogin/>}/>
      <Route path='/CaptainSignup' element={<CaptainSignup/>}/>
      <Route path='/CaptainLogin' element={<CaptainLogin/>}/>
    </Routes>
    </>
  )
}

export default App