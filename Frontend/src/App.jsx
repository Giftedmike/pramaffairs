import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Checkout from './pages/Checkout';
import { Route, Routes } from 'react-router-dom';
import AdminSignUp from './pages/AdminSignUp';
import AdminSignIn from './pages/AdminSignIn';
import UserSignUp from './pages/UserSignUp';
import UserSignIn from './pages/UserSignIn';


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/AdminSignUp' element={<AdminSignUp/>} />
        <Route path='/AdminSignIn' element={<AdminSignIn/>} />
        <Route path='/UserSignUp' element={<UserSignUp/>} />
        <Route path='/UserSignIn' element={<UserSignIn/>} />
        <Route path='/Checkout' element={<Checkout/>} />
      </Routes>
    </>
  )
}

export default App
