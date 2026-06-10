import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Profiles</Link>
      </div>

      <div className="navbar-actions">
        <Link to="/add-profile">
          <button className="add-profile-btn">+ Add New Profile</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
