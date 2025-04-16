import pic from '../assets/portrait.png'
import logo from '../assets/Untitled_design__2_-removebg-preview.png'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
const CaptainHome = () => {

  const [ridePopUP, setridePopUP] = useState(true)
  const [confirmRidePopUP, setconfirmRidePopUP] = useState(false)
  const ridePopUpRef = useRef(null)
  const confirmRidePopUpRef = useRef(null)

  useGSAP(() => {
    if(ridePopUP){
      gsap.to(ridePopUpRef.current,{
        transform:'translateY(0)' 
      })
    }else{
      gsap.to(ridePopUpRef.current,{
        transform:'translateY(100%)'
      })
    }

  },[ridePopUP])

  useGSAP(() => {
    if(confirmRidePopUP){
      gsap.to(confirmRidePopUpRef.current,{
        transform:'translateY(0)' 
      })
    }else{
      gsap.to(confirmRidePopUpRef.current,{
        transform:'translateY(100%)'
      })
    }

  },[confirmRidePopUP])

  return (
    <div className='h-screen relative overflow-hidden'>

      <img className="w-35 absolute mt-4 ml-3 " src={logo} />

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className='absolute w-screen bg-white bottom-0 rounded-t-2xl py-7 '>
        <div className='flex flex-row'>
          <div className='flex items-center justify-center w-[20%]'>
            <img className='rounded-full h-13 w-13 object-cover' src={pic} alt="" />
          </div>
          <div className='flex flex-col w-[60%] px-2'>
            <h2 className='font-semibold text-lg'>Jeremiah Curtis</h2>
            <p className='text-s text-gray-400'>Basic Level</p>
          </div>
          <div className='flex flex-col w-[20%] items-end pr-4'>
            <h2 className='font-semibold text-lg'>$325.00</h2>
            <p className='text-s text-gray-400' >Earned</p>
          </div>
        </div>

        <div className='pb-5 mx-4  mt-5 rounded-2xl bg-amber-300 flex flex-row'>
          <div className='flex flex-col items-center w-full'>
            <i className="ri-time-line text-gray-400 text-3xl pt-4"></i>
            <h2 className='text-xl font-semibold'>10.2</h2>
            <p className='text-gray-400 text-xs'>HOURS ONLINE</p>
          </div>
          <div className='flex flex-col items-center w-full'>
            <i className="ri-speed-up-line text-gray-400 text-3xl pt-4"></i>
            <h2 className='text-xl font-semibold'>30 KM</h2>
            <p className='text-gray-400 text-xs'>TOTAL DISTANCE</p>
          </div>
          <div className='flex flex-col items-center w-full'>
            <i className="ri-bookmark-line text-gray-400 text-3xl pt-4"></i>
            <h2 className='text-xl font-semibold'>20</h2>
            <p className='text-gray-400 text-xs'>TOTAL JOBS</p>
          </div>
        </div>
      </div>

      <div ref={ridePopUpRef} className='fixed z-10 bottom-0  flex flex-col w-full  translate-y-full '>
        <RidePopUp setridePopUP={setridePopUP} setconfirmRidePopUP={setconfirmRidePopUP} />
      </div>

      <div ref={confirmRidePopUpRef} className='fixed z-10 bottom-0 h-screen flex flex-col w-full  translate-y-full '>
        <ConfirmRidePopUp setconfirmRidePopUP={setconfirmRidePopUP} />
      </div>

    </div>
  )
}

export default CaptainHome