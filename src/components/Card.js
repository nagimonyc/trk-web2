import React from 'react';
import nagimoLogo from '../images/Nagimo-Logotype.png'
import userPic from '../images/user_box.png'

const Card = ({ firstName, lastName, photoUrl, currentStep }) => {
    const fullName = `${firstName} ${lastName}`.trim();
    const cardBackground = currentStep === 3 ? 'linear-gradient(to bottom, #FFFFFF, #FF8100)' : 'linear-gradient(to bottom, #CCCCCC, #888888)';

    return (
        <div style={{ ...styles.cardContainer, background: cardBackground }}>
            <div style={styles.logoContainer}>
                <img src={nagimoLogo} alt="Logo" style={styles.logo} />
            </div>
            <div style={styles.photoContainer}>
                {photoUrl ? (
                    <div style={styles.photoWrapper}>
                        <img src={photoUrl} alt="User Photo" style={styles.photo} />
                        <div style={styles.overlayText}>Sample</div>
                    </div>
                ) : (
                    <div style={styles.photoPlaceholder}>
                        <img src={userPic} alt="Missing Photo" style={{ height: 75, width: 75, position: 'relative' }} />
                    </div>
                )}
            </div>
            <div style={styles.userInfo}>
                <p style={styles.userName}>{fullName}</p>
            </div>
            <div style={styles.membershipStatus}>
                <p style={{ margin: 0 }}>MEMBER</p>
            </div>
        </div>
    );
};

const styles = {
    cardContainer: {
        width: 200,
        height: 300,
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '15px',
        marginTop: '25px',
    },
    logoContainer: {
        width: '50%',
    },
    logo: {
        width: '100%',
        height: 'auto',
    },
    photoContainer: {
        width: '70%',
        height: '80%',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',  // Added for overlay positioning
    },
    photoWrapper: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    photo: {
        width: '100%',
        height: '100%',
    },
    overlayText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '5px 10px',
        borderRadius: '5px',
    },
    photoPlaceholder: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    userInfo: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    userName: {
        color: 'black',
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '15px',
        margin: 0,
    },
    membershipStatus: {
        borderRadius: '5px',
        backgroundColor: '#397538',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '15px',
        textAlign: 'center',
        width: '60%',
        margin: 0,
        height: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
};

export default Card;
