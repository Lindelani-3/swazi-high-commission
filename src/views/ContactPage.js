import React from 'react';
import './ContactPage.css';
import SidePanel from '../components/SidePanel';
import contactImage from './content/phophonyane-falls.png';


const ContactPage = () => {
  return (
    <div className="ContactPage">
      <img src={contactImage} alt="Contact Page" />
      <div className="content">
        <h1>Contact Us</h1>
        <p>You can reach us at contact@swazihighcom.co.za</p>
      </div>
      <SidePanel />
    </div>
  );
};

export default ContactPage;
