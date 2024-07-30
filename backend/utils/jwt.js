const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.generateToken = (user) => {
  return jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1d' });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, config.jwtSecret);
};
