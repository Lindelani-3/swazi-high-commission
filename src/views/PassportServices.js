import React from 'react';
import './PassportServices.css';
// import SidePanel from '../components/SidePanel';
import passportImage from './content/ezulwini-proj.png';
import backgroundImage from './content/background.png';

function PassportServices() {
  return (
    <div className='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="PassportServices">
      <img src={passportImage} alt="Passport Services" />
      <div className="opener">
        <h1>Passport Services</h1>
        <p>Find all the necessary information regarding passport services offered by the Swaziland High Commission.</p>
      </div>
      <br></br>
      <div>
      <section>
        <h2>Applying for a New Passport</h2>
        <p>Information on the required documents, fees, and the application process for obtaining a new Swaziland passport.</p>
      </section>

      <section>
        <h2>Renewing Your Passport</h2>
        <p>Guidelines on how to renew your Swaziland passport, including necessary forms, fees, and submission processes.</p>
      </section>

      <section>
        <h2>Lost or Stolen Passports</h2>
        <p>Steps to take if your Swaziland passport is lost or stolen, and how to apply for a replacement.</p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>If you have any questions or need further assistance regarding passport services, please do not hesitate to contact us.</p>
        <a href="/contact">Contact Information</a>
      </section>
      </div>
    </div>
    </div>
  );
}

export default PassportServices;
