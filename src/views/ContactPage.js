import React from 'react';
import './ContactPage.css';
import contactImage from './content/high commission pretoria.webp';
import backgroundImage from './content/background.webp';

const ContactPage = () => {
  return (
    <div className='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="ContactPage">
        <img src={contactImage} alt="High Commission in Pretoria" />
        <div className="opener">
          <h1>Contact Us</h1>
        </div>
        <br />
        <section>
          <h2>High Commissioner</h2>
          <p>LS Kunen, HE Ms</p>
        </section>
        <section>
          <p>For any inquiries, please contact us at:</p>
          <p><strong>Email:</strong> <a href="mailto:contact@swazihighcom.co.za">contact@swazihighcom.co.za</a></p>
          <p><strong>Phone:</strong> +27 12 345 6789</p>
          <p><strong>Address:</strong> 123 Diplomatic Lane, Pretoria, South Africa</p>
          <p>Our team is available to assist you with any questions or concerns you may have. Feel free to reach out to us through any of the channels listed above.</p>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
