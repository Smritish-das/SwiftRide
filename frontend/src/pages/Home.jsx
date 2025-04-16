import { useRef, useState } from 'react'
import logo from '../assets/Untitled_design__2_-removebg-preview.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'; 
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/waitingForDriver';


const home = () => {
  const [pickUp, setpickUp] = useState('');
  const [drop, setdrop] = useState('');
  const [panel, setpanel] = useState(false);
  const panelRef = useRef(null);
  const iconRef = useRef(null)
  const [vehiclePanel, setvehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [confirmRide, setconfirmRide] = useState(false);
  const confirmRef = useRef(null)
  const [lookingForDriver, setlookingForDriver] = useState(false);
  const lookingForDriverRef = useRef(null)
  const [waitDriver, setwaitDriver] = useState(false);
  const waitDriverRef = useRef(null);
  

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(() => {
    if(panel){
      gsap.to(panelRef.current,{
        height:'70%',
        padding:'5%'
      })
      gsap.to(iconRef.current,{
        opacity:100,
      })
    }
    else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:'0% 10%',
      })
      gsap.to(iconRef.current,{
        opacity:0,
      })
    }
  },[panel])

  useGSAP(() => {
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)' 
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }

  },[vehiclePanel])

  useGSAP(() => {
    if(confirmRide){
      gsap.to(confirmRef.current,{
        transform:'translateY(0)' 
      })
    }else{
      gsap.to(confirmRef.current,{
        transform:'translateY(100%)'
      })
    }

  },[confirmRide])

  useGSAP(() => {
    if(lookingForDriver){
      gsap.to(lookingForDriverRef.current,{
        transform:'translateY(0)' 
      })
    }else{
      gsap.to(lookingForDriverRef.current,{
        transform:'translateY(100%)'
      })
    }

  },[lookingForDriver])

  useGSAP(() => {
    if(waitDriver){
      gsap.to(waitDriverRef.current,{
        transform:'translateY(0)' 
      })
    }else{
      gsap.to(waitDriverRef.current,{
        transform:'translateY(100%)'
      })
    }

  },[waitDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className="w-35 absolute mt-4 ml-3 " src={logo} />
      
      <div className='h-screen w-screen'>
        {/* image for temporary use */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div  className=' h-screen  flex flex-col justify-end absolute w-full top-0 '>

        <div className='h-[30%] p-5 bg-white relative '>
          <h5
          ref={iconRef}
          onClick={() => setpanel(false)} 
          className='absolute top-3 text-3xl right-5 opacity-0' 
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold' >Find a Trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>
              <div className="line h-16 bg-black w-1 absolute top-21 left-10 rounded-full"></div>
              <input
              onClick={() => setpanel(true)}
              value={pickUp}
              onChange={(e) => {
                setpickUp(e.target.value);
              }} 
              className='bg-[#eee] px-10 w-full py-2 my-2 rounded-xl text-lg' 
              type="text" 
              placeholder='Add a pickup Location'
              />
              <input
              onClick={() => setpanel(true)}
              value={drop}
              onChange={(e) => {
                setdrop(e.target.value);
              }}
              className='bg-[#eee] px-10 w-full py-2 my-2 rounded-xl text-lg' 
              type="text" 
              placeholder='Add a drop Location'
              />
          </form>
        </div>

        <div ref={panelRef} className='h-0 bg-white'>
          <LocationSearchPanel setpanel={setpanel} setvehiclePanel={setvehiclePanel}></LocationSearchPanel>
        </div>

      </div>

      <div ref={vehiclePanelRef} className='fixed bg-white z-10 bottom-0  flex flex-col py-5 translate-y-full px-3 w-full'>
        <VehiclePanel setvehiclePanel={setvehiclePanel} setconfirmRide={setconfirmRide}></VehiclePanel>
      </div>

      <div ref={confirmRef} className='fixed bg-white z-10 bottom-0  flex translate-y-full flex-col py-2 w-full'>
        <ConfirmRide setconfirmRide={setconfirmRide} setlookingForDriver={setlookingForDriver} />
      </div>

      <div ref={lookingForDriverRef} className='fixed bg-white z-10 bottom-0  flex flex-col py-2 w-full translate-y-full'>
        <LookingForDriver />
      </div>

      <div ref={waitDriverRef} className='fixed bg-white z-10 bottom-0  flex flex-col py-2 w-full  '>
        <WaitingForDriver setwaitDriver={setwaitDriver} />
      </div>

    </div>
  )
}

export default home