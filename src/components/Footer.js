import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">Contact Us</h3>
          <p>Email: info@swazihighcommission.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Swazi St, Mbabane, Eswatini</p>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/consular-services">Consular Services</a></li>
            <li><a href="/discover-eswatini">Discover Eswatini</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Swazi High Commission, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;