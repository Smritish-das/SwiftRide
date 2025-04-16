import { useState} from 'react'
import pic from '../assets/portrait.png'
import { Link } from 'react-router-dom'
const ConfirmRidePopUp = (props) => {
    const [otp, setotp] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
    <div>
      <div className="w-full py-3 rounded-t-xl flex flex-row bg-gray-100 border-b-2 border-gray-300">
        <div className="w-1/4 flex justify-center">
          <img src={pic} className="rounded-xl h-15" />
        </div>
        <div className="w-2/4 flex flex-col">
          <p className="font-semibold text-xl">Esther Perry</p>
          <p className="mt-1">
            <span className="bg-teal-400 text-xs font-semibold px-3 py-1 rounded-2xl">
              Cash
            </span>
          </p>
        </div>
        <div className="w-1/4 flex flex-col items-end px-3">
          <h2 className="font-semibold text-xl">$25.22</h2>
          <p className="text-gray-400">2.2 Km</p>
        </div>
      </div>

      <div className="border-b-2 border-gray-300 bg-white p-4">
        <div className="border-b-2   border-gray-300 py-3">
          <p className="text-gray-400 text-sm">PICK UP</p>
          <h2 className="text-lg">7985 Swift Village</h2>
        </div>
        <div className=" py-3">
          <p className="text-gray-400 text-sm">DROP OFF</p>
          <h2 className="text-lg">105, William St., Chicago, US</h2>
        </div>
      </div>
      <div className="border-b-2 border-gray-300 bg-white p-4">
        <div className="border-b-2   border-gray-300 py-3">
          <p className="text-gray-400 text-sm">NOTED</p>
          <h2 className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus{" "}
          </h2>
        </div>

        <div className=" py-3 border-b-2   border-gray-300">
          <p className="text-gray-400 text-sm">TRIP FARE</p>
          <div className="flex flex-col">
            <div className="flex flex-row w-full justify-between">
              <p>Cash</p>
              <p>Rs. 250.00</p>
            </div>
            <div className="flex flex-row w-full justify-between">
              <p>Discount</p>
              <p>Rs. 50.00</p>
            </div>
            <div className="flex flex-row w-full justify-between">
              <p>Paid</p>
              <p>Rs. 300.00</p>
            </div>
          </div>
        </div>

        <div>
         <form onSubmit={(e) => submitHandler(e)}>
            <div className='w-full pt-3 flex justify-center'>
            <input value={otp} onChange={(e) => setotp(e.target.value)} type="number" placeholder='Enter the OTP' className='bg-teal-200 flex justify-center p-2 rounded-2xl' />
            </div>
           
         <div className="flex justify-evenly items-center">
            <Link
              to="/captain/riding"
              className="rounded-xl flex justify-center mt-5 items-center flex-col bg-green-400 h-17 w-17 text-white"
            >
              <p>
                <i className="ri-check-double-line text-xl"></i>
              </p>
              <p>Confirm</p>
            </Link>
            <div
              onClick={() => props.setconfirmRidePopUP(false)}
              className="rounded-xl flex justify-center mt-5 items-center flex-col bg-red-400 h-17 w-17 text-white"
            >
              <p>
                <i className="ri-delete-bin-6-line text-xl"></i>
              </p>
              <p>Cancel</p>
            </div>
          </div>
         </form>
        </div>

      </div>
    </div>
  );
}

export default ConfirmRidePopUp