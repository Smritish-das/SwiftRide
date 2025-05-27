import {useContext} from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
const CaptainDetails = () => {
    const { captain } = useContext(CaptainDataContext)
    if (!captain) return null; // or show a loading state
  return (
    <>
        <div className='flex flex-row'>
          <div className='flex items-center justify-center w-[20%]'>
            <img className='rounded-full h-13 w-13 object-cover' src="https://res.cloudinary.com/dwuaohlet/image/upload/v1748272736/portrait_clhkti.png" alt="" />
          </div>
          <div className='flex flex-col w-[60%] px-2'>
            <h2 className='font-semibold text-lg capitalize'>{captain.fullname.firstname + " " + captain.fullname.lastname}</h2>
            <p className='text-s text-gray-400'>Basic Level</p>
          </div>
          <div className='flex flex-col w-[20%] items-end pr-4'>
            <h2 className='font-semibold text-lg'>$325.00</h2>
            <p className='text-s text-gray-400' >Earned</p>
          </div>
        </div>

        <div className='pb-5 mx-4  mt-5 rounded-2xl bg-teal-300 flex flex-row'>
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
    </>
  )
}

export default CaptainDetails