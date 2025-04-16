import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useEffect, useContext, useState } from 'react'
import axios from 'axios'
const CaptainProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!token) {
            navigate('/captain/login')
        } else {
            axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                if(response.status === 200) {
                    setCaptain(response.data)
                    setIsLoading(false)
                }
            }).catch(error => {
                console.error(error)
                localStorage.removeItem('token')
                navigate('/captain/login')
            })
        }
    }, [token, navigate, setCaptain])

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
            { children }
        </>
    )
}

export default CaptainProtectedWrapper