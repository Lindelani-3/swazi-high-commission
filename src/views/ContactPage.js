import React from 'react';
import './ContactPage.css';
// import SidePanel from '../components/SidePanel';
import contactImage from './content/high commission pretoria.png';
import backgroundImage from './content/background.png';


const ContactPage = () => {
  return (
    <div className='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="ContactPage">
      <img src={contactImage} alt="Contact Page" />
      <div className="opener">
        <h1>Contact Us</h1>
        <p>You can reach us at contact@swazihighcom.co.za</p>
      </div>
      <br></br>
      <div>
      <section>
        <h1>Contact Us</h1>
        <p>You can reach us at contact@swazihighcom.co.za</p>
      </section>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;
