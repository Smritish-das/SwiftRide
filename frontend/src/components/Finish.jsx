import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Finish = (props) => {
  const navigate = useNavigate();
  const submitHandler = async () => {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/ride/end-ride`,{
      rideId: props.ride._id
    },{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })

    if(response.status === 200){
      navigate('/captain/home')
    }
  }

  return (
    <div>
          <div className="w-full py-3 rounded-t-xl flex flex-row bg-gray-100 border-b-2 border-gray-300">
            
            <div className="w-1/4 flex justify-center">
              <img src="https://res.cloudinary.com/dwuaohlet/image/upload/v1748272736/portrait_clhkti.png" className="rounded-xl h-15" />
            </div>
            <div className="w-2/4 flex flex-col">
              <p className="font-semibold text-xl">{props.ride?.user.fullname.firstname}</p>
              <p className="mt-1">
                <span className="bg-teal-400 text-xs font-semibold px-3 py-1 rounded-2xl">
                  Cash
                </span>
              </p>
            </div>
            <div className="w-1/4 flex flex-col items-end px-3">
              <h2 className="font-semibold text-xl">Rs.{props.ride?.fare}</h2>
              <p className="text-gray-400">2.2 Km</p>
            </div>
        </div>
    
        <div className="border-b-2 border-gray-300 bg-white p-4">
            <div className="border-b-2   border-gray-300 py-3">
              <p className="text-gray-400 text-sm">PICK UP</p>
              <h2 className="text-lg">{props.ride?.pickUp}</h2>
            </div>
            <div className=" py-3">
              <p className="text-gray-400 text-sm">DROP OFF</p>
              <h2 className="text-lg">{props.ride?.destination}</h2>
            </div>
        </div>

        <div className="border-b-2 border-gray-300 bg-white p-4">
            <div className=" py-3">
              <p className="text-gray-400 text-sm">TRIP FARE</p>
              <div className="flex flex-col">
                <div className="flex flex-row w-full justify-between">
                  <p>Cash</p>
                  <p>Rs. {props.ride?.fare}</p>
                </div>
                <div className="flex flex-row w-full justify-between">
                  <p>Discount</p>
                  <p>Rs. 50.00</p>
                </div>
                <div className="flex flex-row w-full justify-between">
                  <p>Paid</p>
                  <p>Rs. {props.ride?.fare + 50}</p>
                </div>
              </div>
            </div>
        </div>
            <div className='flex justify-center items-center  bg-white p-4'>
              <button onClick={() => {submitHandler()}} className='py-2 px-20 text-white bg-teal-400 border-1 text-xl rounded-lg'>Finish Ride</button>
            </div>
          
        </div>
  )
}

export default Finish