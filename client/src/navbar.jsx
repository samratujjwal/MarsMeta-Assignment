import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <span className="logo-mark">P</span>
          <span className="logo-text">Profiles</span>
        </Link>
      </div>

      <div className="navbar-actions">
        <Link to="/add-profile">
          <button className="add-profile-btn">
            <span className="btn-plus">+</span>
            New Profile
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
