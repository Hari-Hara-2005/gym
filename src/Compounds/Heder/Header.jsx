import React from "react";
import'./Header.css';
import logo from"../../assets/logo.png";
import { Link } from "react-router-dom";
function Header(){
    return(
    <div className="header">
    <img src={logo}/>
    <ul className="header-menu">
      <Link to="/" style={{color:'white'}}><li>Home</li></Link>
      <Link to="/Program" style={{color:'white'}}><li>Programs</li></Link>
      <Link to="/Reason" style={{color:'white'}}><li>Why Us</li></Link>
        <li>Plans</li>
        <li>Testimonials</li>
    </ul>
    </div>);
}
export default Header;