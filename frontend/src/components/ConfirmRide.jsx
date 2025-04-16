import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5 onClick={()=> props.setconfirmRide(false)} className='flex justify-center text-3xl text-[#c2c4c4]'> <i className="ri-arrow-down-wide-fill"></i> </h5>
      <h5  className='flex pb-2 justify-center text-xl font-semibold'> Confirm Your Ride </h5>
      <div className="w-screen top-9 left-0  h-1 my-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      <div className='flex w-full justify-center py-2'>
        <img className='h-30' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSox9BKp9shn46-lwuSfX7Sib9Zb-ffkuFHHRbZB_qeY6biAYjl" />
      </div>

      <div className='pl-12 border-t border-[#b2b2b2] '>
        
        <div className='py-3 border-b border-[#b2b2b2]'>
          <div className='absolute left-4 top-65 text-xl'><i className="ri-map-pin-2-fill"></i></div>
          <p className='text-xl font-bold'>562/11-A</p>
          <p>kaikondrahalli, Bengaluru, Karnataka</p>
        </div>
        <div className='py-3 border-b border-[#b2b2b2]'>
          <div className='absolute left-4 top-85 '><i className="ri-square-fill"></i></div>
          <p className='text-xl font-bold'>Third Wave Coffee</p>
          <p>Bengaluru, Karnataka</p>
        </div>
        <div className='py-3'>
          <div className='absolute left-3 top-103 text-xl '><i className="ri-bank-card-fill"></i></div>
          <p className='text-xl font-bold'>Rs.193</p>
          <p>Cash</p>
        </div>
      </div>

      <div className="flex justify-center my-2"><button onClick={() => {
        props.setconfirmRide(false);
        props.setlookingForDriver(true);
      }} className='w-60 rounded-2xl text-2xl text-white py-1 mx-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Confirm</button></div>
      
    </div>
  )
}

export default ConfirmRide