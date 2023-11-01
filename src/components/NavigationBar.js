import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import logoImage from './content/Coat_of_arms_of_Eswatini.svg_.png'; 


function NavigationBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="navbar" role="navigation">
      <div className="logo">
        <Link to="/">
          <img src={logoImage} alt="Swaziland High Commission Logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        
        <Link to="/discover-eswatini">Discover Eswatini</Link>
        <div className="dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
          <Link to="/consular-services">Consular Services</Link>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/consular-services/visa-information">Visa Information</Link>
              <Link to="/consular-services/passport-services">Passport Services</Link> {/* Add this line */}
            </div>
          )}
        </div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        
      </div>
    </div>
  );
}

export default NavigationBar;
