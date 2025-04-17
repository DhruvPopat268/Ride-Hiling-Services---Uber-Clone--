import React from 'react'

const UserLocation = () => {
  return (
    <>
    
      <div className='flex flex-col h-screen items-center relative'>
        <input className='bg-sky-100 text-xl w-[70%] py-2 px-2  border rounded font-medium ' placeholder='enter your drop off location'/>

        <div className='confirmRide mt-10 '>
          <h2 className='text-center font-bold text-2xl'>Choose a ride</h2>
          <h5 className='text-xl px-9 text-center'>Fares are slightly higher due to increased demand</h5>

          <div className='Vehicles h-screen'>
            <div className="rickshaw ">
              <img className='' src='https://imgs.search.brave.com/KoLB0ZH4AeP0hFqx7W7OdSxTXeWZWs1uR5iVhNsLngM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNS9BdXRv/LVJpY2tzaGF3LVRy/YW5zcGFyZW50LVBO/Ry5wbmc'/>
            </div>
            <div className="MotoSaver">
              <img src='https://imgs.search.brave.com/zmW6B11nUYxukNuo7aLFUa0J0t6gyLuvU03ZO3-T7jI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDUv/OTExLzgzNy9zbWFs/bC9tb2Rlcm4tZ3Jl/eS1lbGVjdHJpYy1z/Y29vdGVyLXN0YW5k/aW5nLWN1dC1vdXQt/c3RvY2stcG5nLnBu/Zw'/>
            </div>
            <div className="Moto">
              <img src='https://imgs.search.brave.com/CSu718mwhxYF-MYHraARxc7muYqYpD7UdY_jkKtFhes/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdm/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9iaWtlLXBuZy1p/bWFnZS1wbmdmcmUt/NTAtMTAyNHg4Nzgu/cG5n'/>
            </div>
            <div className="taxi">
            <img src='https://imgs.search.brave.com/olKahzMCdfqI06rOASgLbB3YXXevLgxSf2kNgBVvJ3Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdHJhbnNwb3J0/YXRpb24tMzAxLzY0/LzEzLXRheGktMTI4/LnBuZw'/>

            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default UserLocation