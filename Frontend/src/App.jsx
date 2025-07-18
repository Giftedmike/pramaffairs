import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Checkout from './components/Checkout';
import { Route, Routes, Navigate } from 'react-router-dom';
import AdminSignUp from './pages/AdminSignUp';
import AdminSignIn from './pages/AdminSignIn';
import UserSignUp from './pages/UserSignUp';
import UserSignIn from './pages/UserSignIn';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import Samples from './components/Samples';
import Order from './components/Order';
import SuccessOrder from './components/SuccessOrder';
import SalesNotifications from './components/SalesNotifications';




function App() {
  let token = localStorage.getItem("token")

  return (
    <>
    <SalesNotifications />
      <Routes>
        
        {/* <Route path='/dashboard' element={token? <Dashboard/> : <Navigate to="/userSignIn" />} /> */}
        <Route path='/admindashboard' element={token? <AdminDashboard/> : <Navigate to="/adminSignIn" />} />
        <Route path='/adminSignUp' element={<AdminSignUp/>} />
        <Route path='/adminSignIn' element={<AdminSignIn/>} />
        <Route path='/userSignUp' element={<UserSignUp/>} />
        <Route path='/userSignIn' element={<UserSignIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<Navigate to="/dashboard" />} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/samples' element={<Samples/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/successOrder' element={<SuccessOrder/>} />
      </Routes>
    </>
  )
}

export default App
