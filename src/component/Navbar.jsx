import React from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("token");
  const name = localStorage.getItem("username");
  function clear(){
    localStorage.clear()
    navigate('/login')
  }
  return (
   <div>
    {
      auth?
     <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" >Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav"  >
            <li className="nav-item">
              <a className="nav-link" onClick={()=>{navigate("/updateprofile")}}>Update Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>{navigate("/addprofile")}}>AddProfile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={clear} >LogOut <span className='text-white'> ({JSON.parse(name)})</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>{navigate("/profile")}}>Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>    :
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" >
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                
                onClick={() => {
                  navigate("/signup");
                }}
              >
                SignUp
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

    }
   </div>
  );
}

export default Navbar;
