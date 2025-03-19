import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Make sure the styles are imported

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/about" className="brand-link">
          <strong>WILLEM</strong>
        </Link>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link 
              to="/about" 
              className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/work" 
              className={`nav-item ${location.pathname === '/work' ? 'active' : ''}`}
            >
              Work
            </Link>
          </li>
          <li>
            <Link 
              to="/cv" 
              className={`nav-item ${location.pathname === '/cv' ? 'active' : ''}`}
            >
              CV
            </Link>
          </li>
          <li>
            <Link 
              to="/contact"
              className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
