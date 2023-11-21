import React from 'react';
import './ContactPage.css';
// import SidePanel from '../components/SidePanel';
import contactImage from './content/phophonyane-falls.png';


const ContactPage = () => {
  return (
    <div className="ContactPage">
      <img src={contactImage} alt="Contact Page" />
      <div className="opener">
        <h1>Contact Us</h1>
        <p>You can reach us at contact@swazihighcom.co.za</p>
      </div>
      <div>
        <section>
        <h1>Contact Us</h1>
        <p>You can reach us at contact@swazihighcom.co.za</p>
        </section>
      </div>
      {/* <SidePanel /> */}
    </div>
  );
};

export default ContactPage;
