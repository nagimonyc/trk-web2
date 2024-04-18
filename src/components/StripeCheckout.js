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
            if (stripeCheckoutInstanceRef.current) {
                stripeCheckoutInstanceRef.current.unmount();
            }
        };
    }, []);

    return null;
}

export default StripeCheckout;
