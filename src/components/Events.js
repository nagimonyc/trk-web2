import React from 'react';
import './Events.css';

const EventBox = ({ time, place, image }) => {
    return (
        <div className="event-box">
            <img src={require(`../images/${image}`)} alt="Event Image" className="event-image" />
            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 24, fontWeight: 600, margin: 0, paddingTop: 5 }}>{time}</p>
            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 14, margin: 0, color: 'rgb(140, 155, 176)' }}>{place}</p>
        </div >
    );
}

const Events = () => {
    return (
        <div className="events-container">
            <h1 className="">Partners</h1>
            <div className="events-list">
                <EventBox time="MetroRock" place="321 Starr St, Brooklyn" image="bushwick.avif" />
                <EventBox time="Bouldering Project" place="575 Degraw St, Brooklyn" image="BP.avif" />
                <EventBox time="Method" place="16 Lombardy St, Newark" image="MethodClimbing.avif" />
                <EventBox time="Brooklyn Boulders" place="23-10 41st Ave, Queens" image="BKB.avif" />
                {/* <EventBox time="GP81" place="379 Jefferson St, Brooklyn" image="Gp81.avif" /> */}
                <EventBox time="Island Rock" place="60 Skyline Dr, Plainview" image="IslandRock.avif" />
                {/* <EventBox time="more soon" place="" image="Group-8.avif" /> */}
            </div>
        </div>
    );
}

export default Events;