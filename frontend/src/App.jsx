import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import Start from './pages/Start';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import UserLogout from './pages/UserLogout';

const App = () => {

  return (
    <>

      <Routes>
        <Route path='/start' element={<Start />} />
        <Route path='/UserSignup' element={<UserSignup />} />
        <Route path='/UserLogin' element={<UserLogin />} />
        <Route path='/CaptainSignup' element={<CaptainSignup />} />
        <Route path='/CaptainLogin' element={<CaptainLogin />} />
        <Route path='/Home' element={
          
          <UserProtectedWrapper>
            <Home/>
          </UserProtectedWrapper>

        } />
        <Route path='/UserLogout' element={
          
          <UserProtectedWrapper>
            <UserLogout/>
        </UserProtectedWrapper>
      } />

      </Routes>
    </>
  )
}

export default App