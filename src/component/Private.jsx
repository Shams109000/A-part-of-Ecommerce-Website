import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
function Private1() {
    const token=localStorage.getItem("token")
  return  token?<Outlet/>:<Navigate to="/login"/>
    
}
function Private2() {
    const token=localStorage.getItem("token")
  return  token?<Navigate to="/profile"/>:<Outlet/>
    
}

export{Private1,Private2}