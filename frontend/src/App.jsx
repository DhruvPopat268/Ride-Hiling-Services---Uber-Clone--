import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import UserHome from './pages/UserHome'
import CaptainHome from './pages/CaptainHome'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import Start from './pages/Start';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper';
import UserLogout from './pages/UserLogout';
import CaptainLogout from './pages/CaptainLogout'
import UserLocation  from './pages/UserLocation'

const App = () => {

  return (
    <>

      <Routes>
        <Route path='/start' element={<Start />} />
        <Route path='/UserSignup' element={<UserSignup />} />
        <Route path='/UserLogin' element={<UserLogin />} />
        <Route path='/CaptainSignup' element={<CaptainSignup />} />
        <Route path='/CaptainLogin' element={<CaptainLogin />} />
        <Route path='/UserHome' element={

          <UserProtectedWrapper>
            <UserHome />
          </UserProtectedWrapper>

        } />

        <Route path='/CaptainHome' element={
          <CaptainProtectedWrapper>
            <CaptainHome />
          </CaptainProtectedWrapper>
        } />

        <Route path='/UserLogout' element={

          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        } />
        <Route path='/CaptainLogout' element={

          <CaptainProtectedWrapper>
            <CaptainLogout />
          </CaptainProtectedWrapper>
          
        } />
        <Route path='/UserLocation' element={<UserLocation/>} />

      </Routes>
    </>
  )
}

export default App