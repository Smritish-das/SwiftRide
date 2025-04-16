import { useState,useContext } from 'react'
import logo from '../assets/Flux_Dev_A_modern_and_sleek_logo_for_SwiftRide_a_ridehailing_a_2.jpeg'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CaptainSignup = () => {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [ vehicleColor, setVehicleColor ] = useState('');
  const [ vehiclePlate, setVehiclePlate ] = useState('');
  const [ vehicleCapacity, setVehicleCapacity ] = useState('');
  const [ vehicleType, setVehicleType ] = useState('');

  
  const { captain, setCaptain } = useContext(CaptainDataContext);


  const submitHandler = async (e) => {

    e.preventDefault();

    const captainData = {
      fullname : {
        firstname:firstName,
        lastname:lastName
      },
      email,
      password,
      vehicle:{
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    console.log(captainData);
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData);

    if(response.status === 201){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain/home'); 
    }
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');

    
  }
  
  return (
    <div className="h-screen flex flex-col justify-between bg-violet-300 p-7">
      <div>
        <img src={logo} className="w-35 ml-1 mb-5" alt="Logo" />
        <form onSubmit={(e) => submitHandler(e)}> 
          <h3 className="text-xl mb-2 font-medium text-gray-800">What's your name?</h3>
          <div className='flex gap-4 mb-5'> 
          <input 
            className="rounded bg-gray-200 w-1/2 px-6 py-2 border text-lg placeholder:text-gray-500" 
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} 
            placeholder="First Name" 
            required
          />
          <input 
            className="rounded bg-gray-200 px-6 w-1/2 py-2 border text-lg placeholder:text-gray-500" 
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} 
            placeholder="Last Name" 
            required
          />
          </div>

          <h3 className="text-xl mb-2 font-medium text-gray-800">What's your email?</h3>
          <input 
            className="rounded bg-gray-200 px-6 py-2 border mb-5 w-full text-lg placeholder:text-gray-500" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com" 
            required
          />
          <h3 className="text-xl mb-2 font-medium text-gray-800">What's your password?</h3>
          <input
            className="rounded bg-gray-200 px-6 py-2 border mb-5 w-full text-lg placeholder:text-gray-500" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password" 
            required
          />
          <h3 className="text-xl mb-2 font-medium text-gray-800">Vechicle Information</h3>
          <div className='flex gap-4 mb-5'> 
          <input 
            className="rounded bg-gray-200 w-1/2 px-4 py-2 border text-sm placeholder:text-gray-500" 
            type="text"
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)} 
            placeholder="Vehicle Color" 
            required
          />
          <input 
            className="rounded bg-gray-200 px-4 w-1/2 py-2 border text-sm placeholder:text-gray-500" 
            type="text"
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)} 
            placeholder="Vechile Plate" 
            required
          />
          </div>
          <div className='flex gap-4 mb-5'> 
          <input 
            className="rounded bg-gray-200 w-1/2 px-4 py-2 border text-sm placeholder:text-gray-500" 
            type="number"
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)} 
            placeholder="Vehicle Capacity" 
            required
          />
          <select required className='rounded bg-gray-200 w-1/2 px-4 py-2 border text-sm placeholder:text-gray-500' 
          value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
            <option value=''>Vehicle Type</option>
            <option value='car'>Car</option>
            <option value='motorcycle'>Motorcycle</option>
            <option value='auto'>Auto</option>
          </select>
          </div>
          <button className="rounded bg-green-500 hover:bg-blue-700 px-6 py-2 text-white  w-full text-lg font-semibold">
            Create Captain Account
          </button>
          <p className="text-center text-medium mb-3">
            Already have an account? <Link to="/captain/login" className="text-blue-500 hover:underline">Login here</Link>
          </p>
        </form>
      </div>
      <div>
        <p className='text-xs'>This site is protected by reCAPTCHA 
          and the<span className='underline'>Google Privacy Policy</span> 
          and <span className='underline'>Terms of Service apply</span>. </p>
      </div>
    </div>
  )
}

export default CaptainSignup
