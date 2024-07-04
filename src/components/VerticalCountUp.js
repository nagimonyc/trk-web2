import React, { useEffect, useState } from 'react';
import './VerticalCountUp.css';

const VerticalCountUp = ({ start, end, duration }) => {
    const [current, setCurrent] = useState(start);
    const [transitionDuration, setTransitionDuration] = useState(0);

    useEffect(() => {
        console.log(`Starting count from ${start} to ${end} over ${duration} seconds`);

        // Start the animation with a slight delay to ensure the initial render is complete
        setTimeout(() => {
            setTransitionDuration(duration);
            setCurrent(end);
        }, 100);
    }, [start, end, duration]);

    useEffect(() => {
        console.log(`Rendered with current number: ${current}`);
    }, [current]);

    return (
        <div className="vertical-count-up">
            <div
                className="numbers-wrapper"
                style={{
                    transform: `translateY(${-current * 100}%)`,
                    transition: `transform ${transitionDuration}s ease-in-out`
                }}
            >
                {[...Array(end + 1).keys()].map(number => (
                    <div key={number} className="number">
                        {number}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerticalCountUp;
