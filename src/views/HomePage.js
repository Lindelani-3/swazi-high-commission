import React, { useState, useEffect, useCallback } from 'react';
import './HomePage.css';
import SidePanel from '../components/SidePanel';
import huts from './content/beehive-huts-kamsholo.png';
import sibebe from './content/sibebe.png';
import malolotja from './content/malolotja.png';
import ngwenya from './content/ngwenya-lodge-2.png';
import ngwenyaother from './content/ngwenya-lodge.png';
import mbabane from './content/mbabane.png';

const HomePage = () => {
  const images = [sibebe, malolotja, ngwenya, ngwenyaother, mbabane, huts];
  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = useCallback(() => {
    setCurrentImage((current) => (current + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(changeImage, 7000); // Change image every 5 seconds
    return () => clearInterval(intervalId);
  }, [changeImage]);

  const handleImageClick = () => {
    changeImage();
    // Resetting the interval is handled in the useEffect hook
  };

  return (
    <div 
      className="homepage" 
      style={{ backgroundImage: `url(${images[currentImage]})` }}
      onClick={handleImageClick}
    >
      <div className="welcome-message">
        <h1>Welcome to the Eswatini High Commission</h1>
        <p>
          We are delighted to welcome you to our official website. The Swazi High Commission is dedicated to fostering strong relations, promoting trade, and providing consular services.<br />
          Explore our website to learn more about Eswatini, find information on consular services, and discover the vibrant culture and rich history of our beautiful kingdom.
        </p>
      </div>
      <SidePanel />
    </div>
  );
};

export default HomePage;
