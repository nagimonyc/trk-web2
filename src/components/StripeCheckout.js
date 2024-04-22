import React, { useEffect, useRef } from 'react';
import { initializeStripe } from '../services/stripeService';

function StripeCheckout() {
    console.log('StripeCheckout component mounted');
    const stripeCheckoutInstanceRef = useRef(null);

    useEffect(() => {
        console.log('StripeCheckout mounting');
        const setupStripe = async () => {
            const stripeCheckoutInstance = await initializeStripe();
            stripeCheckoutInstanceRef.current = stripeCheckoutInstance;
            stripeCheckoutInstance.mount('#checkout');
        };

        setupStripe();

        return () => {
            if (stripeCheckoutInstanceRef.current) {
                console.log('StripeCheckout unmounting');
                stripeCheckoutInstanceRef.current.unmount();
            }
        };
    }, []);

    return null;
}


export default StripeCheckout;