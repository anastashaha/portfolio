import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'

function navbar() {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  if (location.pathname === '/projects') {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/"><img src={logo}/></Link>
        </div>
      </nav>
    );
  }


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo}/></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/projects">← Back to Projects</Link></li>
        {/* <li><Link to="/play">Play</Link></li> */}
      </ul>
    </nav>
  );
}

export default navbar;