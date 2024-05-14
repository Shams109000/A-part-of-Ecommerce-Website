import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Createpassword() {
    const navigate=useNavigate()
    const[newpassword,setNewPassword]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")
    const id=localStorage.getItem("id")
    async function createPassword(e){
    e.preventDefault()
    const obj={
        id:id,
        password:newpassword
    }
    if(newpassword==""||confirmPassword==""){
        alert("please fill all the details")
    }
   
    else{
        if(newpassword===confirmPassword){
            const {data}=await axios.post("http://localhost:3000/setPassword",obj)
            if(data.errorCode==200){
                alert(data.message)
                navigate('/login')
            }
            else{
                alert(data.message)
            }
        }
        else{
            alert("password must be same")
        }
    }
 }
  return (
    <div className="mt-3">
    <div className="conatiner mt-5  p-2 ">
      <div className="row ">
          <div className=" d-flex  justify-content-center " >
          <form onSubmit={createPassword} style={{backgroundColor:"#aee1e1",width:"380px"}} className='p-4'>
      <div className="mb-3">
        <label htmlFor="pwd" className="form-label">
          New Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="pwd"
          placeholder="create new password"
          name="pswd"
          onChange={(e)=>setNewPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirm-pwd" className="form-label">
          Confirm Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="confirm-pwd"
          placeholder="Retype new password"
          name="pswd"
          onChange={(e)=>setConfirmPassword(e.target.value)}

        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
          </div>
      </div>
    </div>
    
  </div>
  )
}

export default Createpassword