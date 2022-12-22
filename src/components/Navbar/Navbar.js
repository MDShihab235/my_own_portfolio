import React, { useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

const Navbar = () => {
  const navRef = useRef();
  // const resumeRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    // resumeRef.current.classList.toggle("")
  };
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="navItems" ref={navRef}>
        <Link className="link" to="/">
          <li className="navItem">Home</li>
        </Link>
        <Link className="link" to="/about">
          <li className="navItem">About</li>
        </Link>

        <Link className="link" to="/projects">
          <li className="navItem">Projects</li>
        </Link>
        <Link className="link" to="/services">
          <li className="navItem">Services</li>
        </Link>
        <Link className="link" to="/blog">
          <li className="navItem">Blog</li>
        </Link>
        <Link className="link" to="/contact">
          <li className="navItem">Contact</li>
        </Link>
        <button className="close" onClick={showNavbar}>
          <img src={close} alt="close" />
        </button>
      </ul>
      <a
        href="https://drive.google.com/uc?export=download&id=1CX9kPhIKs5Je0Bq1t1tFZiOtzoBOdczj"
        download="shihab-resume"
        className="navBtn"
      >
        Resume
      </a>
      <button rel="noreferrer" className="menu" onClick={showNavbar}>
        <img src={menu} alt="menu" />
      </button>
    </div>
  );
};

export default Navbar;
