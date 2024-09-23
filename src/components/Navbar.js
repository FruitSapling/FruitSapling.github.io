import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Make sure the styles are imported

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <strong>WILLEM</strong> {/* Site name */}
      </div>
      <div className="navbar-links">
        <ul>
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
