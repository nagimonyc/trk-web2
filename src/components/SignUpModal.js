// Create a new file Modal.js or add this in the same file if preferred
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2, // Ensure this is above other content but below any always-on-top elements
        }}>
            <div style={{
                padding: 20,
                background: '#FFFFFF',
                borderRadius: '5px',
                width: 'auto',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                zIndex: 3,
            }}>
                {children}
                <button onClick={onClose} style={{ marginTop: 10 }}>Close</button>
            </div>
        </div>
    );
};

export default Modal;