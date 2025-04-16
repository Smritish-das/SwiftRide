import React from 'react'
import pic from '../assets/portrait.png'

const RidePopUp = (props) => {
  return (
    <div>
       <div className='w-full py-3 rounded-t-xl flex flex-row bg-gray-100 border-b-2 border-gray-300'>
            <div className='w-1/4 flex justify-center'>
                <img src={pic} className='rounded-xl h-15' />
            </div>
            <div className='w-2/4 flex flex-col'>
                <p className='font-semibold text-xl'>Esther Perry</p>
                <p className='mt-1'>
                    <span className='bg-teal-400 text-xs font-semibold px-3 py-1 rounded-2xl'>Cash</span>
                </p>
            </div>
            <div className='w-1/4 flex flex-col items-end px-3' >
                <h2 className='font-semibold text-xl'>$25.22</h2>
                <p className='text-gray-400'>2.2 Km</p>
            </div>
       </div>

       <div className='border-b-2 border-gray-300 bg-white p-4'>
            <div className='border-b-2   border-gray-300 py-3'>
                <p className='text-gray-400 text-sm'>PICK UP</p>
                <h2 className='text-lg'>7985 Swift Village</h2>
            </div>
            <div className=' py-3'>
                <p className='text-gray-400 text-sm'>DROP OFF</p>
                <h2 className='text-lg'>105, William St., Chicago, US</h2>
            </div>
            <div className='flex flex-row items-end justify-end py-4'>
                <button 
                onClick={() => props.setridePopUP(false)} 
                className='text-lg text-gray-400 font-semibold py-2 px-10 rounded-xl'>Ignore</button>
                <button
                onClick={() => {
                    props.setridePopUP(false)
                    props.setconfirmRidePopUP(true)
                }} 
                className='text-lg bg-teal-400 font-semibold py-2 px-10 rounded-xl'>Accept</button>
            </div>
       </div>
    </div>
  )
}

export default RidePopUp