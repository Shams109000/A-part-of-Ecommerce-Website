import React, { useState } from 'react'
import './css/AddProfile.css'; // Import your CSS file
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function AddProfile() {
    const[formData,setFormData]=useState()
    const navigate=useNavigate()
    const [name, setName] = useState("");
    const [adress, setAdress] = useState("");
    const [mobileNo, setContact] = useState("");
    const [dateOfBith, setDob] = useState("");
    const id=localStorage.getItem("id")
    const email=localStorage.getItem("email")
    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    async function addprofile(e){
        e.preventDefault()
        const obj={
            userId:id,
            name:name,
            mobileNo:mobileNo,
            dateOfBith:dateOfBith,
            adress:adress,
            email:JSON.parse(email)
        }
        if(name==''||adress==''||dateOfBith==''||mobileNo==''){
            alert("please fill all the detail")
        }
        else{
            
            const{data}=await axios.post("http://localhost:3000/addUser",obj)
            if(data.errorCode==200){
              localStorage.setItem("userId",data.result.userId)
              console.log(data);
                alert(data.message)
                navigate('/profile')

            }
            else{
            alert(data.message)
            }
            console.log(data,'d');
    
        }
        
    }     
  return (
    <div className="addProfile mt-5 mb-5 pt-3 pb-3">
    <form  className="FORM p-3" onSubmit={addprofile}>
      <div className="mb-3 form-check">
        <label
          htmlFor="name"
          className="form-label"
        >
        Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name='name'
          placeholder="Enter Your Name"
          onChange={(e)=>setName(e.target.value)}

        />
      </div>
      <div className="form-check mb-3">
        <label
          htmlFor="address"
          className="form-label"  
        >Address:</label>
        <input
          type="text"
          className="form-control"
          name='adress'
          id="address"
          placeholder="Enter Your Address"
          onChange={(e)=>setAdress(e.target.value)}
        />
      </div>
      <div className="form-check mb-3">
        <label
          htmlFor="mobileno"
          className="form-label"
        >
        Contact Number:
        </label>
        <input
          type="number"
          className="form-control"
          id="mobileno"
          name='mobileNo'
          placeholder="Enter Your Contact Number"
          onChange={(e)=>setContact(e.target.value)}

        />
      </div>
      <div className="form-check mb-3 pe-5">
        <label
          htmlFor="dob"
          className="form-label"
         >DOB:</label>
        <input 
          type="date"
          className="form-control date"
          id="dob"
          name='dateOfBirth'
          placeholder="Enter Your Address"
          onChange={(e)=>setDob(e.target.value)}

        />
      </div>
      <button type="submit" className="btn btn-warning ms-4 ">
        Submit
      </button>
    </form>
    </div>
  )
}

export default AddProfile