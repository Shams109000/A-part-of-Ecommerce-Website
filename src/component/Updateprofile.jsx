import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
function Updateprofile() {
   
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [mobileNo, setContact] = useState("");
  const [dateOfBith, setDob] = useState("");
  const[toggle,setToggle]=useState(false)
  const navigate=useNavigate()
  const params=useParams()

  async function getData(){
    const{data}=await axios.get(`http://localhost:3000/getProfileList/${params.id}`)
    if (data) {
        setName(data.result[0].name)
        setAdress(data.result[0].adress)
        setContact(data.result[0].mobileNo)
        setDob(data.result[0].dateOfBith)
        
    }
  }
  useEffect(()=>{
    getData()
  },[])
  let obj={
    name:name,
    adress:adress,
    mobileNo:mobileNo,
    dateOfBith:dateOfBith
  }
 async function handleEdit(e){
  e.preventDefault()
    const{data}=await axios.put(`http://localhost:3000/profileEdit/${params.id}`,obj)
    console.log(data);
    navigate('/profile')
  }
  return (
    <div className="addProfile mt-5 mb-5 pt-3 pb-3">
    <form onSubmit={handleEdit} className="FORM p-3">
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
          placeholder="Enter Your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
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
          id="address"
          placeholder="Enter Your Address"
          onChange={(e) => {
            setAdress(e.target.value);
          }}
          value={adress}
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
          placeholder="Enter Your Contact Number"
          onChange={(e) => {
            setContact(e.target.value);
          }}
          value={mobileNo}
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
          placeholder="Enter Your Address"
          onChange={(e) => {
            setDob(e.target.value);
          }}
          value={dateOfBith}
        />
      </div>
      <button type="submit" className="btn btn-warning ">
        Submit
      </button>
    </form>
    </div>

  )
}

export default Updateprofile