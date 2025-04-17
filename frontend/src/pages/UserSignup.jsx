import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { formReducer, setFormData } from '../Slicer/FormSlicer'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

const UserSignup = () => {

  const [userSignupdata, setUserSignupdata] = useState()

  const { register, reset, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  const navigate = useNavigate();

  const data = useSelector((state) => state.form.formdata)

  const onsubmit = async (data) => {

    try {

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, data)

      if (response.status === 201) {
        navigate('/UserLogin')
      }
    }
    catch (error) {
      
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message); // 👉 Shows "User is already exist"
      } else {
        alert("Something went wrong!");
      }
      console.log(error);
    }
  }

  return (
    <>
      <img className='w-20 m-5 ' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt='Uber_logo' />
      <div className='m-10 '>
        <form onSubmit={handleSubmit(onsubmit)}>

          <h3 className='text-xl mb-2 font-bold'>Your Name</h3>

          <input placeholder='First name' {...register('firstname', { required: { value: true, message: "first name is mandatory" } })} className='bg-sky-100 rounded px-4 py-2 border w-32 text-lg placeholder:text-base' />
          {errors.firstname && <span>{errors.firstname.message}</span>}
          <input placeholder='lastname' {...register('lastname')} className='bg-sky-100 ml-9 mb-3 rounded px-4 py-2 border w-32 text-lg placeholder:text-base' />
          {errors.lastname && <span>{errors.lastname.message}</span>}

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
            <Link to={'/UserLogin'} className='bg-black text-white font-bold rounded px-10 py-2'>Login</Link>

            <button className='bg-black text-white font-bold rounded px-10 py-2'>SignUp</button>

          </div>

        </form>
      </div>

    </>
  )
}

export default UserSignup