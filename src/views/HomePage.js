import React, { useState, useEffect, useCallback } from 'react';
import './HomePage.css';
import huts from './content/more huts.png';
import malolotja from './content/malolotja.png';
import eswatini from './content/eswatini.png';
import backgroundImage from './content/background.png';
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
      <div className='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div 
      className="homepage" 
      style={{ backgroundImage: `url(${images[currentImage]})` }}
      onClick={handleImageClick}
      >
        <div className="welcome-message">
          <h1>Welcome<br></br>to the<br></br>Eswatini High Commission</h1>
          {/* <p>
            We are delighted to welcome you to our official website. The Swazi High Commission is dedicated to fostering strong relations, promoting trade, and providing consular services.<br />
            Explore our website to learn more about Eswatini, find information on consular services, and discover the vibrant culture and rich history of our beautiful kingdom.
          </p> */}
        </div>
      </div>
              <div className='opener'>
                  {/* <h2>Section Title</h2> */}
                  <p>‘Sanibonani’ Welcome to the website of the High Commission of the Kingdom of Eswatini to South Africa. This site is the concierge to everything that you need to know about Eswatini, the High Commission and the neighbouring states that it is accredited to.

    We have organized information from the beautiful history and rich culture, to the adventure filled tourism industry. From trade and investment related reports and policies, to all the consular services you will require if you are traveling to the Kingdom. Feel free to browse through the visual splendor in our multimedia galleries. You are welcome to leave your comments and to connect with us on Twitter and Facebook.</p>
              </div>

          <section>
            <div className="text-container">
                <h2>Section Title</h2>
                <p>Description or details about the service...</p>
                {/* More text or elements as needed */}
            </div>
            <div className="image-container">
                <img src={mbabane} alt="Depicting Eswatini culture" />
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
