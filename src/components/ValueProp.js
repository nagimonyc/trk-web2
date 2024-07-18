import React from "react";
import "./ValueProp.css";

const ValueProp = () => {
    return (
        <div className="value-prop-container">
            <h1 className="value-prop-title">1 membership<br></br>4 gyms<br></br><span style={{ color: "white", backgroundColor: 'rgba(255, 101, 1, .5)', paddingLeft: "0.225em", paddingRight: "0.225em", borderRadius: '8px', width: '70' }}>Unlimited climbing</span></h1>
            {/* <p className="value-prop-caption">We believe community is built on the mat.</p> */}
            {/* <button className="value-prop-button">Start today</button> */}
        </div >
    );
}

export default ValueProp;