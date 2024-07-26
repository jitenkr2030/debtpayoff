const plaidClient = require('./plaid/plaidClient');
const stripeClient = require('./stripe/stripeClient');
const creditBureauClient = require('./creditBureaus/creditBureauClient');
const firebaseClient = require('./firebase/firebaseClient');
const twilioClient = require('./twilio/twilioClient');

module.exports = {
    plaidClient,
    stripeClient,
    creditBureauClient,
    firebaseClient,
    twilioClient,
};
