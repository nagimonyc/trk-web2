import React from 'react';
import './Steps.css';

const Steps = ({ currentStep }) => {
    const steps = [
        { name: `Sign up`, id: 1 },
        { name: 'Payment', id: 2 },
        { name: 'Activate Card', id: 3 }
    ];

    return (
        <div className="steps-container">
            {steps.map((step, index) => (
                <div key={index} className={`step ${currentStep === step.id ? 'active' : ''}`}>
                    {step.name}
                    {index < steps.length - 1 && <span className="arrow"> &gt; </span>}
                </div>
            ))}
        </div>
    );
};

export default Steps;
