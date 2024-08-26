import React from 'react';
import './Partners.css';

const PartnersBox = ({ time, place, image, url }) => {
    return (
        <a className="partner-box" style={{ textDecoration: 'none', color: 'inherit' }} href={url}>
            <img src={require(`../images/${image}`)} alt="partner Image" className="partner-image" />
        </a>
    );
}

const Partners = () => {
    return (
        <div className="partners-container" >
            <h1 className="partners-title">Events</h1>
            <div
                className="partners-list">
                <PartnersBox time="6:00 PM" place="partner Place 3" url="" image="Nagimondays-5.avif" />
                <PartnersBox time="6:00 PM" place="partner Place 3" url="" image="NagiBingo.avif" />
                <PartnersBox time="6:00 PM" place="partner Place 3" url="" image="Nagimondays-4.avif" />
                <PartnersBox time="6:00 PM" place="partner Place 3" url="" image="Nagimondays-3.avif" />
                <PartnersBox time="6:00 PM" place="partner Place 3" url="" image="Nagimondays-2.avif" />
                <PartnersBox time="BKB" place="partner Place 1" url="https://www.instagram.com/p/C95nQolStIX/" image="Meetup-BKB2.avif" />
                <PartnersBox time="6:00 PM" place="partner Place 3" url="" image="Nagimondays-1.avif" />
                <PartnersBox time="MetroRock" place="partner Place 1" url="https://www.instagram.com/p/C8j8hqxOLF6/" image="Meetup-BKB.avif" />
                <PartnersBox time="2:00 PM" place="partner Place 2" url="https://www.instagram.com/p/C79gCBbO2J2/" image="Meetup-Bushwick.avif" />
                <PartnersBox time="6:00 PM" place="partner Place 3" url="https://www.instagram.com/p/C7eqkYiu-F6/" image="Meetup-BP.avif" />
            </div>
        </div>
    );
}

export default Partners;
