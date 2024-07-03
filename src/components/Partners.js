import React from 'react';
import './Partners.css';

const PartnersBox = ({ time, place, image }) => {
    return (
        <div className="partner-box" style={{}}>
            <img src={require(`../images/${image}`)} alt="partner Image" className="partner-image" />
        </div>
    );
}

const Partners = () => {
    return (
        <div className="partners-container" >
            <h1 className="partners-title">Events</h1>
            <div className="partners-list">
                <PartnersBox time="MetroRock" place="partner Place 1" image="Meetup-BKB.png" />
                <PartnersBox time="2:00 PM" place="partner Place 2" image="Meetup-Bushwick.png" />
                <PartnersBox time="6:00 PM" place="partner Place 3" image="Meetup-BP.png" />
            </div>
        </div>
    );
}

export default Partners;
