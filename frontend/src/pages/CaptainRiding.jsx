import { useState, useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Finish from '../components/Finish'
import { useLocation } from 'react-router-dom'
import LiveTracking from '../components/LiveTracking'
const CaptainRiding = () => {
  const location = useLocation();
  const rideData = location.state?.ride;

  const [finishRidePanel, setfinishRidePanel] = useState(false)
  const finishRef = useRef(null)

  useGSAP(() => {
    if(finishRidePanel){
      gsap.to(finishRef.current,{
        transform:'translateY(0)' 
      })
    }else{
      gsap.to(finishRef.current,{
        transform:'translateY(100%)'
      })
    }

  },[finishRidePanel])


  return (
    <div className='h-screen absolute '>

      <img className="w-35 absolute mt-4 ml-3 z-10 " src="https://res.cloudinary.com/dwuaohlet/image/upload/v1748272732/Untitled_design__2_-removebg-preview_x6wksq.png" />

      <div className='h-screen w-screen z-0'>
        <LiveTracking />
      </div>

      <div className='absolute bg-teal-400 bottom-0 w-full z-10'>
        <div onClick={() => setfinishRidePanel(true)} className='flex text-2xl justify-center text-white w-full'><i className="ri-arrow-up-wide-line"></i></div>

        <div className='py-2 flex flex-row justify-evenly items-center'>
            <p className='text-lg text-white  px-5 py-2 rounded-2xl border-2 border-violet-500'>4 Kms away</p>
            <h2 onClick={() => setfinishRidePanel(true)} className='bg-violet-500 text-white text-lg  px-5 py-2 rounded-2xl'>Complete Ride</h2>
        </div>

      </div>

      <div ref={finishRef} className='fixed z-20 bottom-0  flex flex-col w-full  translate-y-full '>
        <Finish 
        setfinishRidePanel={setfinishRidePanel}
        ride = {rideData} 
        />
      </div>

    </div>
  )
}

export default CaptainRiding