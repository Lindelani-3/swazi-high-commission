import React from 'react';
import './DiscoverEswatini.css';
// import SidePanel from '../components/SidePanel';
import discEswImage from './content/morehuts.png';


function DiscoverEswatini() {
  return (
    <div className="DiscoverEswatini">
      <img src={discEswImage} alt="Discover Eswatini" />
      <div className="opener">
        <h1>Discover Eswatini</h1>
        <p>Welcome to Eswatini! Explore the beauty, culture, and history of this magnificent kingdom. Dive into the adventures and find out what makes Eswatini unique.</p>
        {/* Add more content as needed */}
      </div>
      <div>
        <section>
        <p>Welcome to Eswatini! Explore the beauty, culture, and history of this magnificent kingdom. Dive into the adventures and find out what makes Eswatini unique.</p>
        </section>
      </div>
      {/* <SidePanel /> */}
    </div>
  );
}

export default DiscoverEswatini;
