import React from 'react';
import './VisaInformation.css';
import SidePanel from '../components/SidePanel';
import visaImage from './content/valley-logo_cleanup.png';


function VisaInformation() {
  return (
    <div className="VisaInformation">
      <img src={visaImage} alt="Visa Information" />
      <div className="content">
        <h1>Visa Information</h1>
        <p>Find all the information you need to apply for a visa to Eswatini. Understand the requirements, processes, and get ready for your trip!</p>
        {/* Add more content as needed */}
      </div>
      <SidePanel />
    </div>
  );
}

export default VisaInformation;
