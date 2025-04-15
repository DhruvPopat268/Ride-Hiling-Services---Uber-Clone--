import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CaptainProtectedWrapper = ({children}) => {

  const captain = useSelector((state)=> state.captainform.captainformdata )

  const navigate = useNavigate();

  useEffect(()=>{
    if(!captain.email) {
      navigate('/CaptainLogin')
    }
  },[captain.email , navigate])
  
  return (

    <div>
        {children}
    </div>
  )
}

export default CaptainProtectedWrapper