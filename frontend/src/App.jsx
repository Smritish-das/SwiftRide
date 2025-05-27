import { Routes, Route } from "react-router-dom";
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup2 from "./pages/CaptainSignUp2";
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import CapatinLogout from './pages/CapatinLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/captain/login" element={<CaptainLogin />} />
        <Route path="/captain/riding" element={<CaptainRiding />} />
        <Route path="/captain/signup" element={<CaptainSignup2 />} />
        <Route path="/home" element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />
        <Route path="/user/logout" element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        } />
        
        <Route path='/captain/home' element={
          <CaptainProtectedWrapper>
            <CaptainHome />
          </CaptainProtectedWrapper>
        } />
        <Route path='/captain/logout' element={
          <CaptainProtectedWrapper>
            <CapatinLogout />
          </CaptainProtectedWrapper>
        } />
      </Routes>
    </div>
  )
}

export default App