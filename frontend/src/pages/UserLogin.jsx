import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom' 
import axios from 'axios'


const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {user, setUser} = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, userData); 

    if(response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);  
      navigate('/home');
    }

    setEmail('');
    setPassword('');
  }




  return (
    <div className="h-screen flex flex-col justify-between bg-gray-300 p-7">
      <div>
        <img src="https://res.cloudinary.com/dwuaohlet/image/upload/v1748272732/Untitled_design__2_-removebg-preview_x6wksq.png" className="w-35 ml-1 mb-5 mt-5" alt="Logo" />
        <form onSubmit={(e) => submitHandler(e)}> 
          <h3 className="text-xl mb-2 font-medium text-gray-800">What is your email?</h3>
          <input 
            className="rounded bg-gray-200 px-6 py-2 border mb-7 w-full text-lg placeholder:text-gray-500" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="email@example.com" 
            required
          />
          <h3 className="text-xl mb-2 font-medium text-gray-800">Enter your password</h3>
          <input
            className="rounded bg-gray-200 px-6 py-2 border mb-7 w-full text-lg placeholder:text-gray-500" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password" 
            required
          />
          <button className="rounded bg-green-500 hover:bg-blue-700 px-6 py-2 text-white mb-2 w-full text-lg font-semibold">
            Login
          </button>
          <p className="text-center text-lg">
            New here? <Link to="/user/signup" className="text-blue-500 hover:underline">Create new account</Link>
          </p>
        </form>
      </div>
      <div>
        <Link to='/captain/login' className="mt-7 flex justify-center item-center rounded bg-[#E82561] px-6 py-2 text-white mb-7 w-full text-lg font-semibold">
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin
