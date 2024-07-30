const jwt = require('jsonwebtoken');
const config = require('./config');

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1d' });
};

module.exports = generateToken;
