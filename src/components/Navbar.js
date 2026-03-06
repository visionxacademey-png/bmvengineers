import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">

        <div className="logo">BMV</div>

        <div
          className={menuOpen ? "menu-icon rotate" : "menu-icon"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "apps"}
          </span>
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        </ul>

      </nav>

      {/* Background Blur Overlay */}
      {menuOpen && <div className="blur-overlay" onClick={() => setMenuOpen(false)}></div>}
    </>
  );
}

export default Navbar;