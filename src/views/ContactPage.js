import React from 'react';
import './ContactPage.css';
import contactImage from './content/valley-logo_cleanup.png';

const ContactPage = () => {
  return (
    <div className="ContactPage">
      <img src={contactImage} alt="Contact Page" />
      <div className="content">
        <h1>Contact Us</h1>
        <p>You can reach us at contact@swazihighcom.co.za</p>
    </div>
    </div>
  );
};

export default ContactPage;
