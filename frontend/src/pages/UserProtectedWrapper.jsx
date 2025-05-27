import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useEffect,useContext, useState } from 'react'
import axios from 'axios'


const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    if (!token) {
        navigate('/user/login')
    } else {
      axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
        headers:{
            Authorization: `Bearer ${token}`
        }
      }).then(response => {
        if(response.status === 200) {
          setUser(response.data)  
          setIsLoading(false)
        }
      }).catch(error => {
        console.error(error)
        localStorage.removeItem('token')
        navigate('/user/login')
      })
    }
  }, [token, navigate, setUser])

  return (
    <>
        { !isLoading && children }
    </>
  )
}

export default UserProtectedWrapper