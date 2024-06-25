const Debt = require('../models/Debt');

const getDebts = async (req, res, next) => {
  try {
    const debts = await Debt.find({ user: req.user._id });
    res.json(debts);
  } catch (err) {
    next(err);
  }
};

module.exports = { getDebts };
