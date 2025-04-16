import { useState, useRef} from 'react'
import logo from '../assets/Untitled_design__2_-removebg-preview.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Finish from '../components/Finish'

const CaptainRiding = () => {

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
    <div className='h-screen relative overflow-hidden'>

      <img className="w-35 absolute mt-4 ml-3 " src={logo} />

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className='absolute bg-yellow-300 bottom-0 w-full'>
        <div onClick={() => setfinishRidePanel(true)} className='flex text-2xl justify-center text-white w-full'><i className="ri-arrow-up-wide-line"></i></div>

        <div className='py-2 flex flex-row justify-evenly items-center'>
            <p className='text-xl'>4 Kms away</p>
            <h2 className='bg-green-600 text-white text-lg  px-5 py-2 rounded-2xl'>Complete Ride</h2>
        </div>

      </div>

      <div ref={finishRef} className='fixed z-10 bottom-0 h-screen flex flex-col w-full  translate-y-full '>
        <Finish />
      </div>

    </div>
  )
}

export default CaptainRiding