import React from 'react';
import './AboutPage.css';
import aboutImage from './content/culture-4.webp';
import backgroundImage from './content/background.webp';

function AboutPage() {
  return (
    <div className='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="AboutPage">
      <img src={aboutImage} alt="Valleys in Eswatini" />
      <div className="opener">
        <h1>About Us</h1>
        <p>Welcome to the About page of the Swaziland High Commission. Here you can learn more about our history, mission, and values.</p>
        {/* Add more content as needed */}
      </div>
      <div>
        <section>
        <h1>About Us</h1>
        <p>Welcome to the About page of the Swaziland High Commission. Here you can learn more about our history, mission, and values.</p>
        </section>
        {/* Add more content as needed */}
      </div>
    </div>
    </div>
  );
}

export default AboutPage;
