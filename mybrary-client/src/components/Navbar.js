import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-logo">
        <img src={logo} alt="mybrary logo" className="logo" />
        <h1>MyBrary</h1>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mybooks">My Books</Link>
          </li>
          <li>
            <Link to="/my-wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}