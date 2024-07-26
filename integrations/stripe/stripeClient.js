const stripe = require('stripe')(require('../config').stripeSecretKey);

const createCustomer = async (email) => {
    const customer = await stripe.customers.create({ email });
    return customer.id;
};

const createCharge = async (customerId, amount, currency = 'usd') => {
    const charge = await stripe.charges.create({
        amount,
        currency,
        customer: customerId,
    });
    return charge.id;
};

module.exports = {
    createCustomer,
    createCharge,
};
