import React from 'react';
import './DiscoverEswatini.css';
import SidePanel from '../components/SidePanel';
import discEswImage from './content/valley-logo_cleanup.png';


function DiscoverEswatiniPage() {
  return (
    <div className="DiscoverEswatini">
      <img src={discEswImage} alt="Discover Eswatini" />
      <div className="content">
        <h1>Discover Eswatini</h1>
        <p>Welcome to Eswatini! Explore the beauty, culture, and history of this magnificent kingdom. Dive into the adventures and find out what makes Eswatini unique.</p>
        {/* Add more content as needed */}
      </div>
      <SidePanel />
    </div>
  );
}

export default DiscoverEswatiniPage;
