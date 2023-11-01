import React from 'react';
import './AboutPage.css';
import aboutImage from './content/valley-logo_cleanup.png';

function AboutPage() {
  return (
    <div className="AboutPage">
      <img src={aboutImage} alt="Valleys in Eswatini" />
      <div className="content">
        <h1>About Us</h1>
        <p>Welcome to the About page of the Swaziland High Commission. Here you can learn more about our history, mission, and values.</p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
}

export default AboutPage;
