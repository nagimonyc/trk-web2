import React, { useEffect, useRef } from 'react';
import { initializeStripe } from '../services/stripeService';
import { useAuth } from '../AuthContext';

function StripeCheckout() {
    const { currentUser } = useAuth();
    const stripeCheckoutInstanceRef = useRef(null);

    useEffect(() => {
        async function setupStripe() {
            if (currentUser && currentUser.uid) {
                console.log('Setting up stripe with userId:', currentUser.uid);
                try {
                    const stripeCheckoutInstance = await initializeStripe(currentUser.uid);
                    stripeCheckoutInstanceRef.current = stripeCheckoutInstance;
                    stripeCheckoutInstance.mount('#checkout');
                    console.log('Stripe mounted');
                } catch (error) {
                    console.error('Error setting up Stripe:', error);
                }
            }
        }

        if (currentUser?.uid) {
            setupStripe();
        }

        return () => {
            console.log('Unmounting Stripe');
            stripeCheckoutInstanceRef.current?.unmount();
        };
    }, [currentUser?.uid]); // Depend on currentUser.uid to re-run the effect

    if (!currentUser?.uid) {
        return <div>Please sign in to proceed with payment.</div>;
    }

    return null; // Or render something related to the checkout process
}

export default StripeCheckout;
