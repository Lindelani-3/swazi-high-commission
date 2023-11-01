import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import logoImage from './content/Coat_of_arms_of_Eswatini.svg_.png'; 

function NavigationBar() {
  const [isConsularDropdownOpen, setIsConsularDropdownOpen] = useState(false);
  const [isDepartmentsDropdownOpen, setIsDepartmentsDropdownOpen] = useState(false);

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
        
        <div className="dropdown" onMouseEnter={() => setIsConsularDropdownOpen(true)} onMouseLeave={() => setIsConsularDropdownOpen(false)}>
          <Link to="/consular-services">Consular Services</Link>
          {isConsularDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/consular-services/visa-information">Visa Information</Link>
              <Link to="/consular-services/passport-services">Passport Services</Link>
            </div>
          )}
        </div>
        
        <div className="dropdown" onMouseEnter={() => setIsDepartmentsDropdownOpen(true)} onMouseLeave={() => setIsDepartmentsDropdownOpen(false)}>
          <span>Departments</span>
          {isDepartmentsDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/departments/foreign-affairs">Foreign Affairs</Link>
              <Link to="/departments/trade-and-commerce">Trade and Commerce</Link>
              <Link to="/departments/education">Education</Link>
              <Link to="/departments/health">Health</Link>
              <Link to="/departments/tourism">Tourism</Link>
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
