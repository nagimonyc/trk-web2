/* eslint-disable */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripe = require("stripe")(functions.config().stripe.secret);

admin.initializeApp();

exports.handleStripeWebhook = functions.https.onRequest(async (req, res) => {
    if (req.method === "POST") {
        const sig = req.headers['stripe-signature'];
        let event;

        try {
            event = stripe.webhooks.constructEvent(req.rawBody, sig, functions.config().stripe.webhook_secret);
            console.log("Received event", event.type);

            if (['payment_intent.succeeded', 'checkout.session.completed'].includes(event.type)) {
                const session = event.data.object;
                const userId = session.metadata.userId;  // Extract user ID from metadata
                const phoneNumber = session.customer_details.phone; // Extract phone number
                console.log("Handling payment for user:", userId);

                if (!userId) {
                    console.error("User ID is missing in metadata");
                    return res.status(400).send("Metadata missing user ID");
                }

                const userRef = admin.firestore().collection("users").doc(userId);
                const userDoc = await userRef.get();

                if (!userDoc.exists) {
                    console.error("User not found with ID:", userId);
                    return res.status(404).send("User not found");
                }

                // Update Firestore record within a transaction
                await admin.firestore().runTransaction(async (transaction) => {
                    const userData = { isMember: true };
                    if (phoneNumber) {
                        userData.phone = phoneNumber;
                    }
                    transaction.update(userRef, userData);
                    console.log("Updated user membership status and phone number for user:", userId);
                });

                res.status(200).send("Membership status and phone number updated successfully");
            } else {
                console.log("Event type not handled:", event.type);
                res.status(200).send("Event type not handled");
            }
        } catch (error) {
            console.error("Webhook Error:", error);
            res.status(400).send(`Webhook Error: ${error.message}`);
        }
    } else if (req.method === "OPTIONS") {
        res.status(204).send("");
    } else {
        res.status(405).send("Method Not Allowed");
    }
});