const User = require('../models/User');
const { generateToken } = require('../utils/jwt');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user || !user.comparePassword(password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id);
    res.json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = { login };
