import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Profile() {
  const navigate=useNavigate()
  const [list,setList]=useState([])
  const userId=localStorage.getItem("userId")
  const getData= ()=>{
    axios.get(`http://localhost:3000/addUserList`,{
      params:{
        id:userId
      }
    } ).then((response) => {
      setList(response.data.result);
      console.log(response.data,"response.data");
    });
   } 
  
   useEffect(()=>{
    getData()
   },[])

  async function Delete(id){
    const {data}=await axios.delete(`http://localhost:3000/deleteProfile/${id}`)
    console.log(data);
    if(data){
      getData()
    alert(data.result)
    }
  }

  async function edit(id){
    navigate("/updateprofile/"+id)
   
  }
  
  return (
    <div className="container text-center   mt-5 me-5 ">
    <div className="row ">
      {
      list.length>0?list.map((val)=>{
          return <div className="col-md-4  " key={val._id}>
          <div className="card  text-white mb-2">
            <div className="card-body bg-dark">
              <h4 className="card-title">{val.name}</h4>
              <p className="card-text">{val.adress}</p>
              <p className="card-text">{val.dateOfBith}</p>
              <p className="card-text">{val.mobileNo}</p>
              <button className="btn btn-primary me-3" onClick={()=>edit(val._id)}>Edit</button>
              <button className="btn btn-primary" onClick={()=>Delete(val._id)} >Delete</button>
            </div>
          </div>
        </div>
        }):"No Profile Upload"
      }
     
    </div>
  </div>
  )
}

export default Profile