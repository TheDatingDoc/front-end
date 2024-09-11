import React, { useState } from "react";
import "../assets/css/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="The Dating Doc Logo" />
        </Link>
      </div>
      <div className="menu-button" onClick={toggleMenu}>
        MENU
      </div>

      {/* Sidebar that opens and closes */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <Link to="/">
            <img src={logo} alt="The Dating Doc Logo" />
          </Link>
        </div>
        <div className="close-btn" onClick={toggleMenu}>
          CLOSE &#10005;
        </div>
        <ul className="sidebar-links">
          <li>
            <a href="/home">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/services">SERVICES</a>
          </li>
          <li>
            <a href="/blog">BLOG</a>
          </li>
          <li>
            <a href="/media">MEDIA</a>
          </li>
          <li>
            <a href="/shop">SHOP</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
          <li>
            <a href="/login">LOGIN / SIGNUP</a>
          </li>
        </ul>
        <div className="social-media-links">
          <a href="https://instagram.com">Instagram</a>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://youtube.com">YouTube</a>
          <a href="https://spotify.com">Spotify</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
