import React from 'react';
import './ContactPage.css';
import contactImage from './content/high commission pretoria.webp';
import backgroundImage from './content/background.webp';


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
