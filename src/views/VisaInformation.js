import React from 'react';
import './VisaInformation.css';
// import SidePanel from '../components/SidePanel';
import visaImage from './content/airlink.webp';
import backgroundImage from './content/background.webp';


function VisaInformation() {
  return (
    <div className='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="VisaInformation">
    <img src={visaImage} alt="Visa Information" />
    <div className="opener">
      <h1>Visa Information</h1>
      <p>Find all the information you need to apply for a visa to Eswatini. Understand the requirements, processes, and get ready for your trip!</p>
      {/* Add more content as needed */}
    </div>
    <br></br>
    <div>
      <section>
      <p>Find all the information you need to apply for a visa to Eswatini. Understand the requirements, processes, and get ready for your trip!</p>
      </section>
    </div>
    </div>
    </div>
  );
}

export default VisaInformation;
