const User = require('../models/User');

exports.registerUser = async (name, email, password) => {
  const user = new User({ name, email, password });
  await user.save();
  return user;
};

exports.loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    throw new Error('Invalid email or password');
  }
  return user;
};

exports.resetPassword = async (email, newPassword) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }
  user.password = newPassword;
  await user.save();
};
