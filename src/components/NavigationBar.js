import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import logoImage from './content/Coat_of_arms_of_Eswatini.svg_.png'; 

function NavigationBar() {
  const [isConsularDropdownOpen, setIsConsularDropdownOpen] = useState(false);
  const [isDepartmentsDropdownOpen, setIsDepartmentsDropdownOpen] = useState(false);
  const [isDiscoverDropdownOpen, setIsDiscoverDropdownOpen] = useState(false);

  return (
    <div className="navbar" role="navigation">
      <div className="logo">
        <Link to="/">
          <img src={logoImage} alt="Swaziland High Commission Logo" />
        </Link>
      </div>
      <div className="nav-links">
      <Link to="/home">Home</Link>

      <div className="dropdown" onMouseEnter={() => setIsDiscoverDropdownOpen(true)} onMouseLeave={() => setIsDiscoverDropdownOpen(false)}>
        <span>Discover Eswatini</span>
        {isDiscoverDropdownOpen && (
          <div className="dropdown-content">
            <Link to="/discover-eswatini">About Eswatini</Link>
            <a href="https://www.thekingdomofeswatini.com/" target="_blank" rel="noopener noreferrer">Eswatini Tourism Website</a>
          </div>
        )}
      </div>
        
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
              <a href="https://www.gov.sz" target="_blank" rel="noopener noreferrer">Eswatini Government</a>
            <a href="https://www.gov.sz/index.php/ministries-departments/ministry-of-home-affairs" target="_blank" rel="noopener noreferrer">Home Affairs</a>
            <a href="https://www.gov.sz/index.php/ministries-departments/ministry-of-agriculture" target="_blank" rel="noopener noreferrer">Agriculture</a>
            <a href="https://www.gov.sz/index.php/ministries-departments/ministry-of-natural-resources" target="_blank" rel="noopener noreferrer">Natural Resources & Energy</a>
            <a href="https://www.gov.sz/index.php/ministries-departments/search-and-menus-setup" target="_blank" rel="noopener noreferrer">Education & Training</a>
            <a href="https://www.gov.sz/index.php/ministries-departments/ministry-of-ict" target="_blank" rel="noopener noreferrer">ICT</a>
            <a href="https://www.gov.sz/index.php/ministries-departments/ministry-of-tourims-environments-a-communications" target="_blank" rel="noopener noreferrer">Tourism & Environmental Affairs</a>
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
