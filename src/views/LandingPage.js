import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; 
import huts from './content/morehuts.webp';
import malolotja from './content/malolotja.webp';
import eswatini from './content/eswatini.webp';
import sibebe from './content/sibebe.webp';

function LandingPage() {
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false);

    const navigateToHomePage = () => {
        setFadeOut(true);
        setTimeout(() => navigate('/home'), 1000); // Delay navigation
    };

    const images = [malolotja, eswatini, huts, sibebe];
    const [currentImage, setCurrentImage] = useState(0);

    const changeImage = useCallback(() => {
        setCurrentImage((current) => (current + 1) % images.length);
    }, [images.length]);

    useEffect(() => {
        const intervalId = setInterval(changeImage, 7000); // Change image every 5 seconds
        return () => clearInterval(intervalId);
    }, [changeImage]);

    return (
        <div className={`landing-page ${fadeOut ? 'fade-out' : ''}`} style={{ backgroundImage: `url(${images[currentImage]})` }}>
            <div className="welcome-section" onClick={navigateToHomePage}>
                <div>
                    <h1>Welcome<br></br>to the<br></br>Eswatini High Commission</h1>
                </div>
            </div>
        </div>
    );

}

export default LandingPage;
