import React, { useEffect, useState } from 'react';
import './SidePanel.css';

function SidePanel() {
  const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const footer = document.querySelector('.footer');
  //     const rect = footer.getBoundingClientRect();
  //     const offset = window.innerHeight - rect.top;

  //     if (offset > 0) {
  //       setOffset(offset);
  //     } else {
  //       setOffset(0);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <aside className="side-panel" style={{ transform: `translateY(-${offset}px)` }}>
      <h3>Latest News</h3>
      {/* Add your news items here */}
      <p>News item 1</p>
      <p>News item 2</p>
      <p>News item 3</p>

      <h3>Important Notices</h3>
      {/* Add your notices here */}
      <p>Notice 1</p>
      <p>Notice 2</p>
      <p>Notice 3</p>


      <h3>Advertisements</h3>
      {/* Add your ads here */}
      {/* <p>Ad 1</p>*/}
      {/* <p>Ad 2</p>*/}
      {/* <p>Ad 3</p>*/}
      
    </aside>
  );
}

export default SidePanel;
