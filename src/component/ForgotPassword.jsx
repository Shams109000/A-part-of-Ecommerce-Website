import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
    const navigate=useNavigate()
    const[email,setEmail]=useState()
    const[otp,setOtp]=useState()
    async function verifyEmail(e){
    const obj={email:email}
        e.preventDefault()
        if(email==""){
            alert("please fill the details")
        }
        else{
        const {data}=await axios.post("http://localhost:3000/forgotPassword",obj)
        console.log(data,"data");
        if(data.errorCode==200){
            localStorage.setItem("id",data.otpData._id)
            alert(data.message) 
            console.log(data.otpData);
        }
        else{
            alert(data.message) 
        }}
    }
    async function verifyotp(e){
        e.preventDefault()
        const id=localStorage.getItem("id")
        const obj={
            otp:otp,
            id:id
        }
        if(otp==""){
            alert("please provie otp")
        }
        else{
            const {data}=await axios.post("http://localhost:3000/otpMatch",obj)
            if(data.errorCode==200){
                alert(data.message)
                navigate('/createPassword')
            }
            else{
                alert(data.message)
            }
        }
    }

  return (
    <div className=' mt-5 d-flex justify-content-center flex-column align-items-center   '>
    <form>
    <div>
      <input type="text" id='userName'placeholder='Email' required style={{ width: "240px" }} onChange={(e)=>{setEmail(e.target.value)}} value={email} />
      
      <button className='btn btn-dark ms-3' onClick={verifyEmail} >Send OTP</button>
      </div>
    <div className='mt-3 '>
      <input type="text"  style={{width:240}} placeholder='otp'onChange={(e)=>setOtp(e.target.value)} />
      <button className='btn btn-dark ms-3' onClick={verifyotp} >Verify</button>
    </div>
    </form>
     
      
  </div>
  )
}

export default ForgotPassword