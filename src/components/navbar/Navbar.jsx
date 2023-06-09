import "./navbar.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import handbagLogo from "../../assets/images/handbagDisplay.jpg";
function Navbar() {
  return (
    <div className="navbar__container">
      <div className="logo"></div>

      <div className="navlinks">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Contacts</a>
        <a href="#">Fashions</a>
        <a href="#">Login</a>
        <a href="#">Sign Up</a>
      </div>

      {/* cart section */}
      <div className="cart"></div>
    </div>
  );
}

export default Navbar;
