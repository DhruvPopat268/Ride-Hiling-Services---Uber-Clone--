import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { captainformReducer , setCaptainformdata } from '../Slicer/CaptainFormSlicer'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {

  const { register, reset, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const onsubmit = async (data) => {
    try {

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, data)

      if (response.status === 201) {
        console.log(response.status)
        dispatch(setCaptainformdata(data))
        navigate('/CaptainHome')
      }
    }

    catch (error) {

      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message); // 👉 Shows "User is already exist"
      }

      console.log(error);
    }
  }

  return (
    <>
      <img className='w-20 m-5 ' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt='Uber_logo' />
      <div className='m-10 '>
        <form onSubmit={handleSubmit(onsubmit)}>

          <h3 className='text-xl mb-2 font-bold'>What's your email</h3>

          <input
            className='bg-sky-100 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
            type='email'
            {...register('email', { required: { value: true, message: "field is required" } })}
            placeholder='enter your email'
          />
          {errors.email && <span className='text-red-500'>***{errors.email.message}</span>}

          <h3 className='text-xl mb-2 mt-3 font-bold'>Enter password</h3>

          <input
            className='bg-sky-100 rounded px-4 py-2 border w-full text-lg placeholder:text-base  '
            type='password'
            {...register('password', { required: { value: true, message: "field is required" }, minLength: { value: 8, message: "8 chars are required" } })}
            placeholder='enter your password'
          />
          {errors.password && <span className='text-red-500'>***{errors.password.message}</span>}

          <div className=' h-80 mt-12 flex flex-col items-center justify-evenly'>
            <button type='submit' className='bg-black text-white font-bold rounded px-10 py-2'>Login</button>

            <Link to={'/CaptainSignup'} className='bg-black text-white font-bold rounded px-10 py-2'>SignUp</Link>
            
            <p> Already have an Account??
              <Link to={'/UserLogin'} className=' text-blue-500 px-1 font-bold rounded  py-2'>Login as User</Link>
            </p>

          </div>
        </form>
      </div>
    </>
  )
}
export default UserLogin