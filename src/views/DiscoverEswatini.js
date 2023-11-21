import React from 'react';
import './DiscoverEswatini.css';
// import SidePanel from '../components/SidePanel';
import mantenga from './content/more huts.png';
import culture from './content/culture-2.png';
import sibebe from './content/sibebe.png';


function DiscoverEswatini() {
  return (
    <div className="DiscoverEswatini">
      <img src={mantenga} alt="Discover Eswatini" />
      <div className="opener">
        <h1>Discover Eswatini</h1>
        <p>Welcome to Eswatini! Explore the beauty, culture, and history of this magnificent kingdom. Dive into the adventures and find out what makes Eswatini unique.</p>
        {/* Add more content as needed */}
      </div>
      <br></br>
      <div>
      <section>
          <div className="image-container">
              <img src={culture} alt="Depicting Eswatini culture" />
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
      </div>
      {/* <SidePanel /> */}
    </div>
  );
}

export default DiscoverEswatini;
