import React, { useEffect, useRef } from 'react';
import { initializeStripe } from '../services/stripeService';
import { useAuth } from '../AuthContext';

function StripeCheckout({ onPaymentComplete }) {  // Accept the callback as a prop
    const { currentUser } = useAuth();
    const stripeCheckoutInstanceRef = useRef(null);

    useEffect(() => {
        async function setupStripe() {
            if (currentUser && currentUser.uid) {
                try {
                    const stripeCheckoutInstance = await initializeStripe(currentUser.uid, currentUser.email);
                    stripeCheckoutInstanceRef.current = stripeCheckoutInstance;
                    stripeCheckoutInstance.mount('#checkout');

                    // Notify parent component that payment setup is complete
                    if (onPaymentComplete) {
                        onPaymentComplete();
                    }
                } catch (error) {
                    console.error('Error setting up Stripe:', error);
                }
            }
        }

        setupStripe();

        return () => {
            if (stripeCheckoutInstanceRef.current) {
                stripeCheckoutInstanceRef.current.unmount();
                stripeCheckoutInstanceRef.current = null;
            }
        };
    }, [currentUser?.uid]); // Depend on currentUser.uid to re-run the effect

    return <div id="checkout" style={{ width: '100%', display: 'flex', alignItems: 'center' }}></div>; // Add a div for Stripe to mount the checkout form
}

export default StripeCheckout;
