import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import ValueProp from './components/ValueProp';
import Events from './components/Events';
import './Home.css';
import Partners from './components/Partners';
import nagimologo from './images/Nagimo-Logotype.png';
import Subscription from './components/Subscription';
import Footer from './components/Footer';

const Home = () => {
    console.log('Home component mounted');

    return (
        <div className="home-container">
            <Header />
            <ValueProp />
            <div style={{ display: 'flex', width: '100%', height: '55px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>

                <div style={{ flex: 1, height: '60%', backgroundColor: '', display: 'flex', alignItems: 'center' }}>
                    <img src={nagimologo} alt="Nagimo Logo" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1, height: '60%', backgroundColor: '', display: 'flex', alignItems: 'center' }}>
                    <img src={nagimologo} alt="Nagimo Logo" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1, height: '60%', backgroundColor: '', display: 'flex', alignItems: 'center' }}>
                    <img src={nagimologo} alt="Nagimo Logo" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                </div>

            </div>
            <Events />
            <Subscription />
            <Partners />
            <Footer />
        </div >
    );
}

export default Home;