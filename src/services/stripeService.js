import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51OaSWnEQO3gNE6xrKK1pHZXzWux71xpxXpA3nQNtNK30Vz43sCQeJzO7QuMk708tOGvGstsLbBS1jtMCIWZ14UCR00j1Bt80cF');

export const fetchClientSecret = async () => {
    console.log('Fetching client secret');
    const response = await fetch("https://us-central1-trk-app-505a1.cloudfunctions.net/createCheckoutSession", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            amount: 299,
            currency: 'usd',
        }),
    });
    const { clientSecret } = await response.json();
    console.log('Client Secret is: ', clientSecret);
    return clientSecret;
};

let stripeCheckoutInstance = null;

export const initializeStripe = async () => {
    console.log('Initializing stripe')
    if (stripeCheckoutInstance) {
        return stripeCheckoutInstance;
    }

    const stripe = await stripePromise;
    const clientSecret = await fetchClientSecret();
    stripeCheckoutInstance = await stripe.initEmbeddedCheckout({
        clientSecret,
    });
    return stripeCheckoutInstance;
};
