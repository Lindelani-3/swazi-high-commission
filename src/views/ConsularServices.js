import React from 'react';
import './ConsularServices.css';
import SidePanel from '../components/SidePanel';
import servicesImage from './content/highway.png';


function ConsularServices() {
  return (
    <div className="ConsularServices">
      <img src={servicesImage} alt="Consular Services" />
      <div className="content">
        <h1>Consular Services</h1>
        <p>Welcome to the Consular Services page of the Swaziland High Commission. Here you can find information about the services we provide.</p>
        
        <section>
          <h2>Visa Services</h2>
          <p>Find information about visa requirements, application processes, and fees for traveling to Eswatini.</p>
          <a href="/consular-services/visa-information">Learn More</a>
        </section>

        <section>
          <h2>Passport Services</h2>
          <p>Information on how to apply for, renew, or replace a Swaziland passport.</p>
          <a href="/consular-services/passport-services">Learn More</a>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>If you have any questions or need further assistance, please do not hesitate to contact us.</p>
          <a href="/contact">Contact Information</a>
        </section>
        </div>
        <SidePanel />
    </div>
  );
}

export default ConsularServices;
