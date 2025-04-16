import React from 'react'
import logo from '../assets/Flux_Dev_A_modern_and_sleek_logo_for_SwiftRide_a_ridehailing_a_2.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'
const UserSignup = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userData, setUserData] = React.useState({});    

  const navigate = useNavigate();

  const {user,setUser}   = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');

    const newUser = { fullname:{
      firstname:firstName,
      lastname:lastName
    },
    email, password };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUser);

    if (response.status === 201) {
      
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);

      navigate('/home');
    }
    
  }

  return (
    <div className="h-screen flex flex-col justify-between bg-violet-300 p-7">
      <div>
        <img src={logo} className="w-35 ml-1 mb-5 mt-5" alt="Logo" />
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
          <button className="rounded bg-green-500 hover:bg-blue-700 px-6 py-2 text-white mb-2 w-full text-lg font-semibold">
            Create Account
          </button>
          <p className="text-center text-medium">
            Already have an account? <Link to="/user/login" className="text-blue-500 hover:underline">Login here</Link>
          </p>
        </form>
      </div>
      <div>
        <p className='text-xs'>By proceeding, you consent to get calls, WhatsApp or SMS messages, 
          including by automated means, from SwiftRide and its affiliates to the number provided. </p>
      </div>
    </div>
  )
}

export default UserSignup
