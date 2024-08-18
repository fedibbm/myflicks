import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { BrowserRouter as Router,Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";


const Navbar = () => (
  <div className="Navbar shadow-md">
    <div className="nav-container">
      {/* Logo */}
      <Link to="/">
        <h1 className="Logo">MyFlicks</h1>
      </Link>
      {/* search bar */}
      <form className="search-bar">
        <input type="text" className="search-bar-field"/>
        <button className="search-bar-button">Search <IoSearch className="search-icon" /></button>
      </form>
      {/* navigation buttons */}
      <ul className="nav-buttons">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Popular">Popular</Link>
        </li>
        <li>
          <Link to="/home">Movies</Link>
        </li>
        <li>
          <Link to="/home">Shows</Link>
        </li>
      </ul>
    </div>
  </div>
);


export default Navbar;
