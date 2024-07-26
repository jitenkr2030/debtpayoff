const plaid = require('plaid');
const config = require('../config');

const client = new plaid.Client({
    clientID: config.plaidClientId,
    secret: config.plaidSecret,
    env: plaid.environments[config.plaidEnv],
});

const getAccessToken = async (publicToken) => {
    const response = await client.exchangePublicToken(publicToken);
    return response.access_token;
};

const getAccounts = async (accessToken) => {
    const response = await client.getAccounts(accessToken);
    return response.accounts;
};

module.exports = {
    getAccessToken,
    getAccounts,
};
