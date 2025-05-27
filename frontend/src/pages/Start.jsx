import { Link } from 'react-router-dom'
const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-green-300 pt-4 flex justify-between flex-col h-screen w-full'
            style={{ backgroundImage: `url("https://res.cloudinary.com/dwuaohlet/image/upload/v1748272732/bgimg_lw12sb.png")`}}>
            <img src="https://res.cloudinary.com/dwuaohlet/image/upload/v1748272732/Untitled_design__2_-removebg-preview_x6wksq.png" className='w-35 ml-3 mt-5' />
            <div className='bg-white py-6 px-4'>
                <h2 className='text-2xl font-bold'>Getting started with SwiftRide</h2>
                <Link to='/user/login' className='flex item-center justify-center w-full bg-black text-white py-3 rounded mt-7'>Continue</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Start