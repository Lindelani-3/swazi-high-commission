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
        <h1>Vision</h1>
        <p>To effectively represent and promote the interests of the Kingdom of Eswatini in South Africa, enhancing bilateral relations and cooperation.</p>
        </section>
        <section>
        <h1>Mission</h1>
        <p>To provide comprehensive diplomatic services, foster trade and cultural exchange, and offer support and assistance to Eswatini nationals in South Africa.</p>
        </section>
        <section>
        <h1>Working Hours</h1>
        <p>Monday to Friday: 9:00 AM - 5:00 PM (excluding public holidays)</p>
        </section>
        <section>
        <h1>Our Team</h1>
        <p>Brief introductions to key staff members, including the High Commissioner and other diplomatic officers.</p>
        </section>
      </div>
    </div>
    </div>
  );
}

export default AboutPage;


