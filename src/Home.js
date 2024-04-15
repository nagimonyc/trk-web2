import React from 'react';
import backgroundImage from './images/IMG_8105.jpeg';


const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', width: '100vw', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
        </div>
    );
}

export default Home;