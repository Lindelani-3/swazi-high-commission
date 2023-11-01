// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@swazihighcommission.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Swazi St, Mbabane, Eswatini</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/consular-services">Consular Services</a></li>
            <li><a href="/discover-eswatini">Discover Eswatini</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="path-to-facebook-icon" alt="Facebook" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src="path-to-twitter-icon" alt="Twitter" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="path-to-instagram-icon" alt="Instagram" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src="path-to-linkedin-icon" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Swazi High Commission, All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
