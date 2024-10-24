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
            <Link to="/" onClick={toggleMenu}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleMenu}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={toggleMenu}>
              BLOG
            </Link>
          </li>
          <li>
            <Link to="/media" onClick={toggleMenu}>
              MEDIA
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={toggleMenu}>
              SHOP
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              CONTACT
            </Link>
          </li>
          <li>
            <Link to="/signup" onClick={toggleMenu}>
              LOGIN / SIGNUP
            </Link>
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
