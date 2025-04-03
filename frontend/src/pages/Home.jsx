import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>  
      <div>
        <div className='bg-amber-400 h-screen  bg-cover bg-center bg-[url(https://media.istockphoto.com/id/526811099/vector/traffic-lights.jpg?s=2048x2048&w=is&k=20&c=TSpW3fge7mgaIPiSYqTyNf0OKcYwcvPFZe8d7WY9ElY=)] flex justify-between flex-col'>
          <img className='w-20 m-5 ' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt='Uber_logo'/>
          <div className='bg-white px-5 py-5 '>
            <h2 className='text-2xl font-bold ml-12 mb-2'>Get started with uber</h2>
            <Link to='/UserLogin' className='text-white text-xl font-medium bg-black px-30 py-2 ml-5 mr-5  rounded'>continue</Link>
          </div>
        </div>
      </div>
    </>
  )
} 
export default Home