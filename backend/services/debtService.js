const Debt = require('../models/Debt');

exports.createDebt = async (userId, creditor, balance, interestRate, minimumPayment) => {
  const debt = new Debt({ user: userId, creditor, balance, interestRate, minimumPayment });
  await debt.save();
  return debt;
};

exports.getDebts = async (userId) => {
  return await Debt.find({ user: userId });
};

exports.deleteDebt = async (debtId) => {
  await Debt.findByIdAndDelete(debtId);
};
