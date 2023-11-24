import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">Contact Us</h3>
          <p>Email: info@swazihighcom.co.za</p>
          <p>Phone: (+27) (12) 344 1910 / 17 / 25</p>
          <p>Postal Address: PO Box 14294, Hatfield, 0028</p>
          <p>Street Address: 715 Government Avenue, cnr Blackwood Street, Arcadia, Pretoria.</p>
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