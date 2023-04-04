import React from "react";
import "../styles/sass/_navbar.scss";
import Logo from '../images/image_1.png';


function Navbar() {
  return (
    <nav className="navbar">
      
      <a href="#" className="navbar-link ">
        Home
      </a>
      <a href="#" className="navbar-link">
        About
      </a>
      <a href="#" className="navbar-link">
        Services
      </a>
      <div className="navbar-logo">
        <img className="logo" src={Logo} alt='logo'></img>
      </div>
      
    </nav>
  );
}

export default Navbar;





