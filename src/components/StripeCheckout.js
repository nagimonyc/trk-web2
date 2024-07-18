import React, { useEffect, useRef } from 'react';
import { initializeStripe } from '../services/stripeService';
import { useAuth } from '../AuthContext';

function StripeCheckout() {
    const { currentUser } = useAuth();
    const stripeCheckoutInstanceRef = useRef(null);

    useEffect(() => {
        async function setupStripe() {
            if (currentUser && currentUser.uid) {
                try {
                    const stripeCheckoutInstance = await initializeStripe(currentUser.uid, currentUser.email);
                    stripeCheckoutInstanceRef.current = stripeCheckoutInstance;
                    stripeCheckoutInstance.mount('#checkout');
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


    return null; // Or render something related to the checkout process
}

export default StripeCheckout;
