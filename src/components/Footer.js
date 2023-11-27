import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">Contact Us</h3>
          <p>Email: info@swazihighcom.co.za</p>
          <p>Phone: (+27) (12) 344 1910 / 17 / 25</p>
          <br></br>
          <ul className="footer-links">
            <li><a href="/contact">Contact Information</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="https://www.gov.sz" target="_blank" rel="noopener noreferrer">Eswatini Government</a></li>
            <li><a href="/discover-eswatini">Discover Eswatini</a></li>
            <li><a href="https://www.gov.sz/index.php/ministries-departments/ministry-of-home-affairs" target="_blank" rel="noopener noreferrer">Home Affairs</a></li>
            <li><a href="https://www.thekingdomofeswatini.com/" target="_blank" rel="noopener noreferrer">Eswatini Tourism Website</a></li>
            <li><a href="https://www.gov.sz/index.php/ministries-departments/ministry-of-ict" target="_blank" rel="noopener noreferrer">Ministry of ICT</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Follow Us</h3>
          <ul className="footer-links">
          <div className="social-icons">
            <a href="https://twitter.com/EswatiniGovern1" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.facebook.com/EswatiniGov" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a href="https://www.instagram.com/eswatini_government" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© 2023 Swazi High Commission, All Rights Reserved</p>
        </div>
        <div className="footer-bottom-right">
          <p>Developer Diindy Design</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;