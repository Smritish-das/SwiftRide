import CaptainDetails from '../components/CaptainDetails';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState, useEffect, useContext } from 'react';
import { SocketContext } from '../context/SocketContext'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios'
import LiveTracking from '../components/LiveTracking';
const CaptainHome = () => {

  const [ridePopUP, setridePopUP] = useState(false)
  const [confirmRidePopUP, setconfirmRidePopUP] = useState(false)

  const ridePopUpRef = useRef(null)
  const confirmRidePopUpRef = useRef(null)

  const { socket } = useContext(SocketContext)
  const { captain } = useContext(CaptainDataContext)

  const [ride, setRide] = useState(null)

  useEffect(() => {
    if (!captain || !captain._id) return;

    socket.emit('join', {
      userId: captain._id,
      userType: 'captain'
    });

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          socket.emit('update-location-captain', {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude
            }
          });
        });
      }
    };

    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation();

    return () => clearInterval(locationInterval);
  }, [captain?._id, socket])


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

  socket.on('new-ride',(data) => {
    setRide(data);
    setridePopUP(true);
  })

  
  async function confirmRide(){
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/ride/confirm`,{
        rideId: ride._id,
        captainId: captain._id,
      },{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })
  }

  return (
    <div className='h-screen relative '>

      <img className="w-35 absolute mt-4 ml-3 z-10 " src="https://res.cloudinary.com/dwuaohlet/image/upload/v1748272732/Untitled_design__2_-removebg-preview_x6wksq.png" />

      <div className='h-screen w-screen z-0'>
        <LiveTracking />
      </div>

      <div className='absolute w-screen bg-white bottom-0 rounded-t-2xl py-7 '>
        <CaptainDetails />
      </div>

      <div ref={ridePopUpRef} className='fixed z-20 bottom-0  flex flex-col w-full  translate-y-full '>
        <
          RidePopUp setridePopUP={setridePopUP} 
          setconfirmRidePopUP={setconfirmRidePopUP}
          ride={ride} 
          confirmRide={confirmRide}
          />
      </div>

      <div ref={confirmRidePopUpRef} className='fixed z-20 bottom-0 h-screen flex flex-col w-full  translate-y-full '>
        <ConfirmRidePopUp 
        ride={ride}
        setridePopUP={setridePopUP}
        setconfirmRidePopUP={setconfirmRidePopUP} />
      </div>

    </div>
  )
}

export default CaptainHome