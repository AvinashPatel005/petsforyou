import React, { useState } from "react";
import { Link } from "react-router";
export default function Navbar() {
  const [signedIn] = useState(true);
  return (
    <nav className="navbar">
      <div className="logo-section">
        <i className="bi-shop"></i>
        <p>PETSFORYOU</p>
      </div>
      <ul className="nav-links">
        <li className="nav-item nav-selected">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/pet">PETS</Link>
        </li>
        <li className="nav-item">
          <Link to="/About">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to="/Secvice">SERVICE</Link>
        </li>
        <li className="nav-item">
          <Link to="/Product">PRODUCT</Link>
        </li>
        <div className="user-icon-container">
          {signedIn ? (
            <>
              <i className="bi bi-cart user-icon"></i>
              <i className="bi bi-person-circle user-icon"></i>
            </>
          ) : (
            <p>Login/Register</p>
          )}
        </div>
      </ul>
    </nav>
  );
}
