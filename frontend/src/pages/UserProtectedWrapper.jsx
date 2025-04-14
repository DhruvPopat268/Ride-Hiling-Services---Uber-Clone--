import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const UserProtectedWrapper = ({children}) => {

  const user = useSelector((state)=> state.form.formdata )

  const navigate = useNavigate();

  useEffect(()=>{
    if(!user.email) {
      navigate('/UserLogin')
    }
  },[user.email , navigate])
  
  return (

    <div>
        {children}
    </div>
  )
}

export default UserProtectedWrapper