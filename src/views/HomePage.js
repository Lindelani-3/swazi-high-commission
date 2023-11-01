import React from 'react';
import './HomePage.css';
import SidePanel from '../components/SidePanel';
import homeImage from './content/beehive-huts-kamsholo.png';


const HomePage = () => {
  return (
    <div className="HomePage">
      <img src={homeImage} alt="Valleys in Eswatini" />
      <div className="content">
        <h1>Welcome to the Swazi High Commission</h1>
        <p>
          We are delighted to welcome you to our official website. The Swazi High Commission is dedicated to fostering strong relations, promoting trade, and providing consular services.
        </p>
        <p>
          Explore our website to learn more about Eswatini, find information on consular services, and discover the vibrant culture and rich history of our beautiful kingdom.
        </p>
      </div>
      <SidePanel />
    </div>
  );
};

export default HomePage;
