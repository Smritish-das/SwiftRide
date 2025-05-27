import { Link, useLocation,useNavigate } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';
import { useEffect,useContext } from 'react';
import LiveTracking from '../components/LiveTracking';
const Riding = () => {
  const location = useLocation();
  const ride = location.state?.ride;
  const { socket } = useContext(SocketContext)
  const navigate = useNavigate();

  socket.on('ride-ended', () => {
    navigate('/home')
  })

  if (!ride) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>No ride data available. Please start a ride from the previous page.</p>
      </div>
    );
  }

  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-35 absolute mt-4 ml-3 z-10" src="https://res.cloudinary.com/dwuaohlet/image/upload/v1748272732/Untitled_design__2_-removebg-preview_x6wksq.png" />
      <Link to='/home' className=' z-10 mt-3 mr-5 h-10 w-10 right-0 rounded-full bg-white absolute flex justify-center items-center text-lg'>
        <i className="ri-home-line"></i>
      </Link>

      <div className="h-screen w-screen z-0">
        <LiveTracking />
      </div>

      <div className="bg-white z-20 w-screen bottom-0 absolute pt-3 ">
        
        <div className="flex flex-row justify-between w-full h-30">
          <div className="flex justify-center items-center w-full">
            <img className="h-16" src="https://res.cloudinary.com/dwuaohlet/image/upload/v1748272731/2_aptlbt.png" />
          </div>
          <div className="flex flex-col  w-[150%] items-end pr-3">
            <h5 className="font-semibold text-[#414141]">{ride?.captain?.fullname?.firstname}</h5>
            <h1 className="text-2xl font-bold">{ride?.captain?.vehicle?.plate}</h1>
            <p className="text-s text-[#555555]">White Suzuki S-Presso LXI</p>
            <p>
              <i className="ri-star-fill px-2"></i>4.8
            </p>
          </div>
        </div>

        <div className='mx-7'>
          <div className="h-20 pt-3 border-b-2 border-[#b2b2b2] flex">

            <div className='flex justify-center pt-2 w-[10%]'>
              <i className="ri-map-pin-2-fill text-xl"></i>
            </div>

            <div className='flex w-[80%] flex-col px-2'>              
              <p>{ride?.pickUp}</p>
            </div>

          </div>
          <div className="h-20 pt-3 flex">

            <div className='flex justify-center pt-2 w-[10%]'>
              <i className="ri-bank-card-fill text-xl"></i>
            </div>

            <div className='flex w-[80%] flex-col px-2'>
              <p className="text-xl font-bold">Rs.{ride?.fare}</p>
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