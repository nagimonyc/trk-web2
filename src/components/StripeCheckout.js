import React, { useEffect, useRef } from 'react';
import { initializeStripe } from '../services/stripeService';

function StripeCheckout() {
    const stripeCheckoutInstanceRef = useRef(null);

    useEffect(() => {
        const setupStripe = async () => {
            const stripeCheckoutInstance = await initializeStripe();
            stripeCheckoutInstanceRef.current = stripeCheckoutInstance;
            stripeCheckoutInstance.mount('#checkout');
        };

        setupStripe();

        return () => {
            // Use the unmount method to clean up the Stripe element
            if (stripeCheckoutInstanceRef.current) {
                stripeCheckoutInstanceRef.current.unmount();
            }
        };
    }, []);

    return null; // The UI is handled by Stripe, so we render nothing.
}

export default StripeCheckout;
