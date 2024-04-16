import React from 'react';
import backgroundImage2 from './images/IMG_8105.jpeg';
import backgroundImage1 from './images/Desktop-Stripe-integration-2.png';


const Home = () => {
    const [backgroundImage, setBackgroundImage] = React.useState(window.innerWidth > 768 ? backgroundImage1 : backgroundImage2);

    React.useEffect(() => {
        const handleResize = () => {
            setBackgroundImage(window.innerWidth > 768 ? backgroundImage1 : backgroundImage2);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', flex: 1, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
    );
}

export default Home;