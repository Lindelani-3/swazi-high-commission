import React, { useState, useEffect, useMemo } from 'react';
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
import ngwenya from './content/ngwenya-lodge-2.webp';
import phopho from './content/phophonyane.webp';
import beehive from './content/beehive.webp';
import highway from './content/highway.webp';

const HomePage = () => {
  const images = useMemo(() => [
    malolotja, eswatini, ezulwini, sibebe, phopho, highway, ngwenya
  ], []);
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  useEffect(() => {
    const imageElements = images.map((image) => {
      const img = new Image();
      img.src = image;
      return img;
    });

    Promise.all(imageElements.map(img => {
      return new Promise((resolve) => {
        img.onload = () => resolve();
      });
    })).then(() => setAreImagesLoaded(true));
  }, [images]);

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

  if (!areImagesLoaded) {
    return <div className='loading'>
      Loading...
    </div>;
  }

  return (
    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='homepage'>
      <Slider {...settings} className='slider-m'>
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
          <p>The Emaswati people, originally known as the Bembo-Nguni, trace their origins to Embu in Kenya. Migrating south under Dlamini, they settled near Mozambique's Maputo River. In the mid-18th century, the Dlamini group entered present-day Eswatini, naming themselves bakaNgwane and their new home kaNgwane. The Kingdom of Eswatini, a landlocked Southern African country, lies between Mozambique and South Africa. 
            </p>
        </div>
        <div className="image-container">
          <img src={beehive} alt="Depicting Eswatini culture" />
        </div>
      </section>
      <section>
        <div className="image-container">
          <img src={mbabane} alt="Depicting Eswatini culture" />
        </div>
        <div className="text-container">
          {/* <h2>Section Title</h2> */}
          <p>Eswatini's history is marked by significant rulers like Sobhuza I, who initiated the unification of various clans, and Mswati II, who solidified this unity. Mswati II’s reign saw the people being referred to as bakaMswati. Sobhuza II, known for his long rule from 1921 to 1982, was succeeded by Makhosetive (Mswati III) in 1986. The lineage of the monarchy, a central aspect of Eswatini's identity, has played a crucial role in the nation's history and culture.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
