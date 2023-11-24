import React from 'react';
import './DiscoverEswatini.css';
// import SidePanel from '../components/SidePanel';
import huts from './content/more huts.png';
import culture from './content/culture-2.png';
import sibebe from './content/sibebe.png';


function DiscoverEswatini() {
  return (
        <div className="DiscoverEswatini">
        {/* <div className="image-mask"> */}
          <img src={huts} alt="Discover Eswatini" />
        {/* </div> */}
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
              <h2>EMASWATI</h2>
                <p>“Emaswati Lamahle Nelive Lawo Lelihle Lelichakazile” fondly praises the majestic and flourishing Kingdom of Eswatini and her people. Radiating a traditional charm inherited from tales of warriors and kings of old, the beautiful monarchy today boasts a bold character given by the rich culture that is beautifully woven into what is known as modern day Eswatini.</p>
                {/* More text or elements as needed */}
            </div>
        </section>

        <section>
          <div className="text-container">
              <h2>HIS MAJESTY KING MSWATI III</h2>
              <p>His Majesty King Mswati III was born at the Raleigh Fitkin Memorial Hospital in Manzini, Eswatini, on 19th April, 1968, that is a few months before Eswatini attained independence from Britain. At birth, he was named Makhosetive (“King of All Nations”). Prince Makhosetive was educated at Masundvwini Palace School and later went to Sherborne School in the United Kingdom until 1986 when he returned to Eswatini to be installed King of Eswatini. According to tradition, his official name and title became Mswati III.</p>
              {/* More text or elements as needed */}
          </div>
          <div className="image-container">
              <img src={sibebe} alt="Depicting Eswatini culture" />
          </div>
        </section>

        <section>
          <div className="image-container">
              <img src={sibebe} alt="Depicting Eswatini culture" />
          </div>
          <div className="text-container">
              <h2>HER MAJESTY INDLOVUKAZI</h2>
              <p>Her Majesty the Queen Mother (Indlovukazi) of the Kingdom of Eswatini has been the Indlovukazi (Great She-Elephant) since 1986. She was born Ntombi Tfwala and she is the Mother to His Majesty, King Mswati III. As per Emaswati custom, Her Majesty became Queen Mother when His Majesty King Mswati III was crowned as king of Eswatini. Prior to that, the Queen Mother was Regent of Eswatini from 1983 until 1986. In essence, the “Indlovukazi” is the Mother of the Emaswati nation, and as part of her traditional role, she rules together with His Majesty the King.</p>
              {/* More text or elements as needed */}
          </div>
        </section>

        </div>
      </div>
  );
}

export default DiscoverEswatini;
