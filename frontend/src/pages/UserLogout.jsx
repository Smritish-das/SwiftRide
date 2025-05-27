import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const UserLogout = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        console.log(response.data);
        localStorage.removeItem('token');
        navigate('/user/login');
    })
  return (
    <div>UserLogout</div>
  )
}

export default UserLogout