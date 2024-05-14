import React, { useState } from 'react';
import './css/Signup.css'; // Import your CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    console.log('Form submitted:', formData);
    if(formData.password.length>3){
        if(formData.password==formData.confirmPassword){
        const {data}=await axios.post('http://localhost:3000/register',formData)
        if(data.code==300){
            alert(data.result)
        }
        else{
        console.log(data,'data');
        alert(data.message)
        navigate('/login')
        }
        }
        else{
            alert("password does not match")
        }
    }
    else{
        alert("atleast 4 words/digit")
    }
    
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-btn'>
        <button type="submit" className="btn btn-dark">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
