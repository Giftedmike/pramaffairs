import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Checkout from './pages/Checkout';
import { Route, Routes, Navigate } from 'react-router-dom';
import AdminSignUp from './pages/AdminSignUp';
import AdminSignIn from './pages/AdminSignIn';
import UserSignUp from './pages/UserSignUp';
import UserSignIn from './pages/UserSignIn';
import Dashboard from './pages/Dashboard'


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/adminSignUp' element={<AdminSignUp/>} />
        <Route path='/adminSignIn' element={<AdminSignIn/>} />
        <Route path='/userSignUp' element={<UserSignUp/>} />
        <Route path='/userSignIn' element={<UserSignIn />} />
        <Route path='/' element={<Navigate to="UserSignIn" />} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </>
  )
}

export default App
