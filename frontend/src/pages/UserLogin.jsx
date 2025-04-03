import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'

const UserLogin = () => {

  const [formData,setFormData] = useState()

  const { register, handleSubmit, watch, formState: { errors , isSubmitting } } = useForm();

  const onsubmit = (data) =>{
    setFormData(data)
    console.log(formData)
  }
  
  return (
    <> 
      <img className='w-20 m-5 ' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt='Uber_logo' />
      <div className='m-10 '>
        <form onSubmit={handleSubmit(onsubmit)}>

          <h3 className='text-xl mb-2 font-bold'>What's your email</h3>

          <input
            className='bg-sky-100 rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7  '
            type='email'
            {...register('email',{required:{value:true,message:"field is required"}})}
            placeholder='enter your email'
          />
         
          <h3 className='text-xl mb-2 font-bold'>Enter password</h3>

          <input
            className='bg-sky-100 rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7  '
            type='password'
            {...register('password',{required:{value:true,message:"field is required"},minLength:{value:8,message:"8 chars are required"}})}
            placeholder='enter your password'
          />
          
          <button type='submit' className='bg-black rounded font-medium mt-12   text-white px-10 py-2 ml-22'>Login</button>

          <p className=' ml-26 mt-6 font-bold text-red-500'>New Here ?</p>

          <button className='bg-black rounded font-medium mt-1   text-white px-10 py-2 ml-20'>Register</button>
          
        </form>
      </div>
      <div className='text-center mt-15'>
        <button className='bg-amber-200 rounded px-12 py-2 font-bold'>Login as Captain</button>
      </div>

    </>
  )
}
export default UserLogin