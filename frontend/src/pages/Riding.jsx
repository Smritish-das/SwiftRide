import React from 'react'
import logo from '../assets/Untitled_design__2_-removebg-preview.png'
import logo1 from '../assets/2.png'
import { Link } from 'react-router-dom'; 
const Riding = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-35 absolute mt-4 ml-3 " src={logo} />
      <Link to='/home' className='mt-3 mr-5 h-10 w-10 right-0 rounded-full bg-white absolute flex justify-center items-center text-lg'>
        <i className="ri-home-line"></i>
      </Link>

      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="bg-white z-10 w-screen bottom-0 absolute pt-3">
        
        <div className="flex flex-row justify-between w-full h-30">
          <div className="flex justify-center items-center w-full">
            <img className="h-16" src={logo1} />
          </div>
          <div className="flex flex-col  w-[150%] items-end pr-3">
            <h5 className="font-semibold text-[#414141]">SANTH</h5>
            <h1 className="text-2xl font-bold">KA15AK00-0</h1>
            <p className="text-s text-[#555555]">White Suzuki S-Presso LXI</p>
            <p>
              <i className="ri-star-fill px-2"></i>4.9
            </p>
          </div>
        </div>

        <div className='mx-7'>
          <div className="h-20 pt-3 border-b-2 border-[#b2b2b2] flex">

            <div className='flex justify-center pt-2 w-[10%]'>
              <i className="ri-map-pin-2-fill text-xl"></i>
            </div>

            <div className='flex w-[80%] flex-col px-2'>
              <p className="text-xl font-bold">Third Wave Coffee</p>
              <p>Bengaluru, Karnataka</p>
            </div>

          </div>
          <div className="h-20 pt-3 flex">

            <div className='flex justify-center pt-2 w-[10%]'>
              <i className="ri-bank-card-fill text-xl"></i>
            </div>

            <div className='flex w-[80%] flex-col px-2'>
              <p className="text-xl font-bold">Rs.193</p>
              <p>Cash</p>
            </div>
            
          </div>
        </div>

        <div className='flex justify-center items-center mb-5'>
          <button className='py-2 px-20 text-white bg-teal-400 border-1 text-xl rounded-lg'>Make a payment</button>
        </div>

      </div>
    </div>
  );
}

export default Riding