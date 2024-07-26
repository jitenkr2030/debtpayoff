const admin = require('firebase-admin');
const config = require('../config');

admin.initializeApp({
    credential: admin.credential.cert(config.firebaseServiceAccount),
    databaseURL: config.firebaseDatabaseUrl,
});

const sendNotification = async (token, message) => {
    const response = await admin.messaging().sendToDevice(token, message);
    return response;
};

const verifyIdToken = async (idToken) => {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    return decodedToken;
};

module.exports = {
    sendNotification,
    verifyIdToken,
};
