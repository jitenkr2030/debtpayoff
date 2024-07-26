const twilio = require('twilio');
const config = require('../config');

const client = twilio(config.twilioAccountSid, config.twilioAuthToken);

const sendSms = async (to, body) => {
    const message = await client.messages.create({
        body,
        from: config.twilioPhoneNumber,
        to,
    });
    return message.sid;
};

const makeCall = async (to, url) => {
    const call = await client.calls.create({
        url,
        to,
        from: config.twilioPhoneNumber,
    });
    return call.sid;
};

module.exports = {
    sendSms,
    makeCall,
};
