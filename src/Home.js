import React from 'react';
import backgroundImage2 from './images/IMG_8105.jpeg';
import backgroundImage1 from './images/Desktop-Stripe-integration-2.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    // console.log('Home component mounted')
    const [backgroundImage, setBackgroundImage] = React.useState(window.innerWidth > 768 ? backgroundImage1 : backgroundImage2);
    const navigate = useNavigate();

    React.useEffect(() => {
        const handleResize = () => {
            setBackgroundImage(window.innerWidth > 768 ? backgroundImage1 : backgroundImage2);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleButtonClick = () => {
        navigate('/membership'); // Replace '/new-page' with the path to the new page
    };

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', backgroundColor: 'black' }}>
            <div style={{ position: 'absolute', right: 0, top: 0, width: '50%', height: '100%' }} onClick={handleButtonClick}></div>
        </div>
    );
}

export default Home;