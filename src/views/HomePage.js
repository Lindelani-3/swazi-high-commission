import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css';
import malolotja from './content/malolotja.webp';
import eswatini from './content/eswatini.webp';
import sibebe from './content/sibebe.webp';
import backgroundImage from './content/background.webp';
import mbabane from './content/mbabane.webp';
import ezulwini from './content/ezulwini-proj.webp';

const HomePage = () => {
  const images = [malolotja, eswatini, mbabane, ezulwini, sibebe];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
  };

  return (
    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='homepage'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ height: '100vh' }}>
            <img src={image} alt={`Slide ${index + 1}`} className='home-slider'/>
          </div>
        ))}
      </Slider>
      <br></br>
      </div>
      <div className='opener'>
        <h2>Welcome to the Eswatini High Commission</h2>
        <p>‘Sanibonani’ Welcome to the website of the High Commission of the Kingdom of Eswatini to South Africa. This site is the concierge to everything that you need to know about Eswatini, the High Commission and the neighbouring states that it is accredited to.

    We have organized information from the beautiful history and rich culture, to the adventure filled tourism industry. From trade and investment related reports and policies, to all the consular services you will require if you are traveling to the Kingdom. Feel free to browse through the visual splendor in our multimedia galleries.</p>
      </div>
      <section>
        <div className="text-container">
          <h2>Section Title</h2>
          <p>We are delighted to welcome you...</p>
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
        </div>
      </section>
    </div>
  );
};

export default HomePage;
