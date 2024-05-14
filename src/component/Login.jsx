import React, { useState } from 'react';
import './css/Login.css'; // Import your CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Login credentials:', formData);
    const{data}=await axios.post("http://localhost:3000/login",formData)
    if(data.statusCode===200){
        console.log(data,'data');
        localStorage.setItem("token",JSON.stringify(data.token))
        localStorage.setItem("username",JSON.stringify(data.user.name))
        localStorage.setItem("email",JSON.stringify(data.user.email))
        localStorage.setItem("id",JSON.stringify(data.user._id))
        alert(data.result)
        navigate('/profile')

    }
    else{
        alert(data.result)
    }
 
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        <button type="submit" className="submit-button">Login</button>
        <button type="submit" className="submit-button ms-3" onClick={()=>navigate("/forgotpassword")}>Forgot password</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
