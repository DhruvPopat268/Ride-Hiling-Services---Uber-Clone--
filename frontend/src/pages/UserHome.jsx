import React, { useState, useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LocationSuggestionPanel from '../Component/LocationSuggestionPanel';

const UserHome = () => {
  const [panelOpen, setpanelOpen] = useState(false)
  const bookingRef = useRef(null)
  const panelCloseRef = useRef(null)
  const suggestionRef = useRef(null)

  useGSAP(() => {
    if (panelOpen) {
      suggestionRef.current.style.opacity = 1
      suggestionRef.current.style.height = "70vh"
      panelCloseRef.current.style.opacity = 1
      gsap.to(bookingRef.current, {
        backgroundColor: 'white',
        top: 0,
        bottom: "auto",
        duration: 0.5,
        ease: "power2.in"
      })
    }
    else{
      suggestionRef.current.style.opacity=0
      panelCloseRef.current.style.opacity = 0

      gsap.to(bookingRef.current, {
        top:"auto",
        duration: 0.5,
        ease: "power2.in"
      })
    } 
  }, [panelOpen])
  
  return (
    <>
      <div className="main h-full w-screen relative">
        <div className="img">
          <img className=' h-full w-full object-cover block' src="https://miro.medium.com/v2/resize:fit:1700/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div ref={bookingRef} className="booking absolute  w-full z-10">
          <div className="ride flex items-center gap-20 py-2 px-2 ">
            <i ref={panelCloseRef} className="text-2xl ml-3 fa-solid fa-arrow-down opacity-0" onClick={() => setpanelOpen(false)}></i>
            <h3 className='text-2xl font-bold'>Book a Ride</h3>
          </div>
          <div className="bookingLocation  h-[70vh] flex flex-col mt-4 items-center gap-8">

            <input placeholder='enter your pickup location' onClick={() => setpanelOpen(true)} className='bg-sky-100 text-xl w-[70%] py-2 px-2  border rounded font-medium ' />
            <input placeholder='enter your dropoff location' className='bg-sky-100 text-xl w-[70%] py-2 px-2  border rounded font-medium' />

            <div ref={suggestionRef} className='suggestion relative bottom-2.5 w-full opacity-0 '>
              <LocationSuggestionPanel/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default UserHome