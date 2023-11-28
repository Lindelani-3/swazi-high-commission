import React from 'react';
import './DiscoverEswatini.css';
import huts from './content/morehuts.webp';
import culture from './content/culture-2.webp';
import king from './content/mswati.webp';
import queen from './content/queen.webp';
import map_pol from './content/map.webp'
import map_phy from './content/map-2.webp'
import backgroundImage from './content/background.webp';



function DiscoverEswatini() {
  return (
      <div className='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="DiscoverEswatini">
        <img src={huts} alt="Discover Eswatini" />
        
        <div className="opener">
          <h1>Discover Eswatini</h1>
          <p>Welcome to Eswatini! Explore the beauty, culture, and history of this magnificent kingdom. Dive into the adventures and find out what makes Eswatini unique.</p>
          {/* Add more content as needed */}
        </div>
        <br></br>
        <div>
        <section>
            <div className="image-container">
                <a href="https://en.wikipedia.org/wiki/Eswatini" target="_blank" rel="noopener noreferrer">
                  <img src={culture} alt="Depicting Eswatini culture" />
                </a>
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
            </div>
            <div className="image-container">
              <a href="https://en.wikipedia.org/wiki/Mswati_III" target="_blank" rel="noopener noreferrer">
                <img src={king} alt="Mswati" />
              </a>
            </div>
        </section>

        <section>
            <div className="image-container">
              <a href="https://en.wikipedia.org/wiki/Ntfombi_of_Eswatini" target="_blank" rel="noopener noreferrer">
                <img src={queen} alt="Queen Mother" />
              </a>
            </div>
            <div className="text-container">
                <h2>HER MAJESTY INDLOVUKAZI</h2>
                <p>Her Majesty the Queen Mother (Indlovukazi) of the Kingdom of Eswatini has been the Indlovukazi (Great She-Elephant) since 1986. She was born Ntombi Tfwala and she is the Mother to His Majesty, King Mswati III. As per Emaswati custom, Her Majesty became Queen Mother when His Majesty King Mswati III was crowned as king of Eswatini. Prior to that, the Queen Mother was Regent of Eswatini from 1983 until 1986. In essence, the “Indlovukazi” is the Mother of the Emaswati nation, and as part of her traditional role, she rules together with His Majesty the King.</p>
            </div>
        </section>

        <section>
            <div className="text-container">
                <h2>LAND OF THE SWAZIS</h2>
                <p>"Live lemaSwati. Land of the Swazis." Eswatini, the second smallest country in Africa after The Gambia, is nestled between Mozambique and South Africa. Spanning 17,363 square kilometers, it's comparable in size to New Jersey, USA, and Wales, UK. The nation features a diverse geography, from the mountainous Highveld in the west, with its rivers and waterfalls, to the lush, fertile valleys of the subtropical Middleveld, and the wildlife-rich Lowveld. Additionally, the Lubombo Plateau borders Mozambique and showcases a subtropical climate. Known as “the Switzerland of Africa” for its stunning mountain scenery, Eswatini encompasses a range of African terrains, except for a desert, within its modest area.</p>
            </div>
        </section>
        <section>
            <div className="image-container">
              <a href="https://www.worldometers.info/maps/swaziland-political-map/" target="_blank" rel="noopener noreferrer">
                <img src={map_pol} alt="Swaziland Political Map" />
              </a>
            </div>
            <div className="image-container">
              <a href="https://www.worldometers.info/maps/swaziland-map/" target="_blank" rel="noopener noreferrer">
                <img src={map_phy} alt="Swaziland Physical Map" />
              </a>
            </div>
        </section>

        </div>
      </div>
      </div>
  );
}

export default DiscoverEswatini;
