import React from 'react';
import './ContactPage.css';
import contactImage from './content/high commission pretoria.webp';
import backgroundImage from './content/background.webp';
import placeholder from './content/placeholder-woman.webp'

const ContactPage = () => {

  return (
    <div className='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="ContactPage">
      <img src={contactImage} alt="High Commission in Pretoria" />
        <div className="opener">
          <h1>Contact Us</h1>
        </div>
        <br />
        <section>
        <div className="image-container">
          <img src={placeholder} alt="Madame High Commissioner" />
        </div>
        <div className="text-container">
        
          <h2>High Commissioner</h2>
          <p>LS Kunen, HE Ms</p>
          <br></br>
          <p>I take this opportunity to thank you for visiting the Official Website of the High Commission of the Kingdom of Eswatini based in South Africa. I believe you will find this site a reliable resource tool in learning about the Kingdom of Eswatini, its People, Economy, Government, as well other aspects of our beloved country.</p>
        </div>
        </section>  
        <section>
        <div className="text-container">
        <p>For any inquiries, please contact us at:</p>
          <p><strong>Email:</strong> <a href="mailto:contact@swazihighcom.co.za">contact@swazihighcom.co.za</a></p>
          <p><strong>Phone:</strong> +27 12 345 6789</p>
          <p><strong>Address:</strong> 123 Diplomatic Lane, Pretoria, South Africa</p>
          <p>Our team is available to assist you with any questions or concerns you may have. Feel free to reach out to us through any of the channels listed above.</p>
        
        </div>
          </section>
      </div>
    </div>
  );
};

export default ContactPage;



// import React, { useEffect, useRef, useState } from 'react';
// import './ContactPage.css';
// import contactImage from './content/high commission pretoria.webp';
// import backgroundImage from './content/background.webp';

// const ContactPage = () => {
//   const googleMapRef = useRef(null);
//   const [mapLoaded, setMapLoaded] = useState(false);
//   const googleMapApiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your API key

//   useEffect(() => {
//     const googleScript = document.createElement('script');
//     googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapApiKey}`;
//     googleScript.async = true;
//     googleScript.defer = true;
//     window.document.body.appendChild(googleScript);

//     googleScript.addEventListener('load', () => {
//       new window.google.maps.Map(googleMapRef.current, {
//         center: { lat: -25.746111, lng: 28.188056 }, // Replace with actual coordinates
//         zoom: 14,
//       });
//       setMapLoaded(true);
//     });
//   }, []);

//   return (
//     <div className='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="ContactPage">
//       <img src={contactImage} alt="High Commission in Pretoria" />
//         <div className="opener">
//           <h1>Contact Us</h1>
//         </div>
//         <br />
//         <section>
//           <h2>High Commissioner</h2>
//           <p>LS Kunen, HE Ms</p>
//         </section>
//         <section>
//           <p>For any inquiries, please contact us at:</p>
//           <p><strong>Email:</strong> <a href="mailto:contact@swazihighcom.co.za">contact@swazihighcom.co.za</a></p>
//           <p><strong>Phone:</strong> +27 12 345 6789</p>
//           <p><strong>Address:</strong> 123 Diplomatic Lane, Pretoria, South Africa</p>
//           <p>Our team is available to assist you with any questions or concerns you may have. Feel free to reach out to us through any of the channels listed above.</p>
//         </section>
//         <section>
//           <h2>Find Us</h2>
//           {!mapLoaded && <div>Loading Map...</div>}
//           <div ref={googleMapRef} style={{ width: '100%', height: '400px', display: mapLoaded ? 'block' : 'none' }}></div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;




