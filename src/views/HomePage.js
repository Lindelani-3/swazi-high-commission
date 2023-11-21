import React, { useState, useEffect, useCallback } from 'react';
import './HomePage.css';
// import SidePanel from '../components/SidePanel';
import huts from './content/morehuts.png';
import malolotja from './content/malolotja.png';
import eswatini from './content/eswatini.png';
// import sibebe from './content/sibebe.png';
// import mbabane from './content/mbabane.png';
// import ngwenya from './content/ngwenya-lodge-2.png';

const HomePage = () => {
  const images = [malolotja, eswatini, huts];
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
        <section>
        <h1>Welcome<br></br>to the<br></br>Eswatini High Commission</h1>
        {/* <p>
          We are delighted to welcome you to our official website. The Swazi High Commission is dedicated to fostering strong relations, promoting trade, and providing consular services.<br />
          Explore our website to learn more about Eswatini, find information on consular services, and discover the vibrant culture and rich history of our beautiful kingdom.
        </p> */}
        </section>
      </div>
      {/* <SidePanel /> */}
    </div>
  );
};

export default HomePage;
