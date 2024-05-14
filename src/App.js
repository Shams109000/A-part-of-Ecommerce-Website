import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './component/Navbar';
import { Routes,Route } from 'react-router-dom';
import SignUp from './component/Signup';
import Login from './component/Login';
import Profile from './component/Profile';
import ForgotPassword from './component/ForgotPassword';
import Createpassword from './component/Createpassword';
import AddProfile from './component/AddProfile';
import Updateprofile from './component/Updateprofile';
import {Private1,Private2} from './component/Private';

<link
rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
integrity="..."
crossorigin="anonymous"
/>

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route element={<Private1></Private1>}>
         <Route path='/profile' element={<Profile></Profile>}></Route>
         <Route path='/addprofile' element={<AddProfile></AddProfile>}></Route>
         <Route path='/updateprofile/:id' element={<Updateprofile></Updateprofile>}></ Route>
       </Route>
       <Route element={<Private2></Private2>}>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='/createPassword' element={<Createpassword></Createpassword>}></Route>
        </Route>
      
       
      
      </Routes>
    </div>
  );
}

export default App;
