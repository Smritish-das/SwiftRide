import React from 'react'
import logo from '../assets/Flux_Dev_A_modern_and_sleek_logo_for_SwiftRide_a_ridehailing_a_2.jpeg'
import logo1 from '../assets/bgimg.png'
import { Link } from 'react-router-dom'
const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-green-300 pt-4 flex justify-between flex-col h-screen w-full'
            style={{ backgroundImage: `url(${logo1})`}}>
            <img src={logo} className='w-35 ml-5 mt-10' />
            <div className='bg-white py-6 px-4'>
                <h2 className='text-2xl font-bold'>Getting started with SwiftRide</h2>
                <Link to='/user/login' className='flex item-center justify-center w-full bg-black text-white py-3 rounded mt-7'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start