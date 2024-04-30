import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51OaSWnEQO3gNE6xrKK1pHZXzWux71xpxXpA3nQNtNK30Vz43sCQeJzO7QuMk708tOGvGstsLbBS1jtMCIWZ14UCR00j1Bt80cF');

export const fetchClientSecret = async (userId, email) => {
    console.log('fetchClientSecret called with userId:', userId);
    try {
        const response = await fetch("https://us-central1-trk-app-505a1.cloudfunctions.net/createCheckoutSession", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                metadata: { userId },
                email: email
            }),
        });
        const { clientSecret } = await response.json();
        console.log('Received clientSecret:', clientSecret);
        return clientSecret;
    } catch (error) {
        console.error('Error fetching client secret:', error);
        throw error;
    }
};

let stripeCheckoutInstance = null;

export const initializeStripe = async (userId) => {
    console.log('initializeStripe called with userId:', userId);
    if (stripeCheckoutInstance) {
        return stripeCheckoutInstance;
    }

    const stripe = await stripePromise;
    const clientSecret = await fetchClientSecret(userId);
    stripeCheckoutInstance = await stripe.initEmbeddedCheckout({
        fetchClientSecret: async () => clientSecret
    });

    console.log('Stripe initialization complete');
    return stripeCheckoutInstance;
};
