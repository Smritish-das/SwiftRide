import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CapatinLogout = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        console.log(response.data);
        localStorage.removeItem('token');
        navigate('/captain/login');
    })

  return (
    <div>CapatinLogout</div>
  )
}

export default CapatinLogout