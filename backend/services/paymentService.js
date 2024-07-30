const Payment = require('../models/Payment');

exports.setupPayment = async (userId, debtId, amount, date) => {
  const payment = new Payment({ user: userId, debt: debtId, amount, date });
  await payment.save();
  return payment;
};

exports.getPayments = async (userId) => {
  return await Payment.find({ user: userId }).populate('debt');
};
