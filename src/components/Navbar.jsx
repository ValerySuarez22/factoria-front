import React from "react";
import "../styles/sass/_navbar.scss";
import Logo from '../images/image_4.png';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="logo" src={Logo} alt='logo'></img>
      </div>
      <a href="#" className="navbar-link ">
        Home
      </a>
      <a href="#" className="navbar-link">
        About
      </a>
      <a href="#" className="navbar-link">
        Services
      </a>
      <a href="#" className="navbar-link">
        Contact
      </a>
    </nav>
  );
}

export default Navbar;





