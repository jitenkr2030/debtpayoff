const axios = require('axios');
const config = require('../config');

const getCreditReport = async (userId) => {
    const response = await axios.get(`${config.creditBureauApiUrl}/users/${userId}/credit-report`, {
        headers: {
            'Authorization': `Bearer ${config.creditBureauApiKey}`,
        },
    });
    return response.data;
};

const getCreditScore = async (userId) => {
    const response = await axios.get(`${config.creditBureauApiUrl}/users/${userId}/credit-score`, {
        headers: {
            'Authorization': `Bearer ${config.creditBureauApiKey}`,
        },
    });
    return response.data;
};

module.exports = {
    getCreditReport,
    getCreditScore,
};
