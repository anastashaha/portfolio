import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Anastasha</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/play">Play</Link></li>
      </ul>
    </nav>
  );
}

export default navbar;