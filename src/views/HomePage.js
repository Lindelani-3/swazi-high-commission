import React, { useState, useEffect, useCallback } from 'react';
import './HomePage.css';
import huts from './content/more huts.png';
import malolotja from './content/malolotja.png';
import eswatini from './content/eswatini.png';
import sibebe from './content/sibebe.png';
import mbabane from './content/mbabane.png';
import ezulwini from './content/ezulwini-proj.png';

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
    <div>
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
    </div>
    <br></br>
    <div>
      <section>
          <div className="image-container">
              <img src={mbabane} alt="Depicting Eswatini culture" />
          </div>
          <div className="text-container">
              <h2>Section Title</h2>
              <p>Description or details about the service...</p>
              {/* More text or elements as needed */}
          </div>
      </section>

      <section>
        <div className="text-container">
            <h2>Section Title</h2>
            <p>Description or details about the service...</p>
            {/* More text or elements as needed */}
        </div>
        <div className="image-container">
            <img src={sibebe} alt="Depicting Eswatini culture" />
        </div>
      </section>

      <section>
        <div className="image-container">
            <img src={ezulwini} alt="Depicting Eswatini culture" />
        </div>
        <div className="text-container">
            <h2>Section Title</h2>
            <p>Description or details about the service...</p>
            {/* More text or elements as needed */}
        </div>
      </section>

      </div>
    </div>
  );
};

export default HomePage;
