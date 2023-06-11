import "./navbar.css";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import handbagLogo from "../../assets/images/handbagDisplay.jpg";
function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className="navbar__container">
      <div className="logo"></div>

      <nav className="navlinks" ref={navRef}>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Contacts</a>
        <a href="#">Fashions</a>
        <a href="#">Login</a>
        <a href="#">Sign Up</a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FontAwesomeIcon icon={faTimes} size="2xl" color="black" />
        </button>
      </nav>

      <div className="cart"></div>
      <button className="nav-btn" onClick={showNavbar}>
        <FontAwesomeIcon icon={faBars} size="2xl" color="black" />
      </button>

      {/* cart section */}
    </header>
  );
}

export default Navbar;
