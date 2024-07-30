const Payment = require('../models/Payment');
const paymentService = require('../services/paymentService');

exports.setupPayment = async (req, res) => {
  const { debtId, amount, date } = req.body;
  try {
    const payment = await paymentService.setupPayment(req.user.id, debtId, amount, date);
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPayments = async (req, res) => {
  try {
    const payments = await paymentService.getPayments(req.user.id);
    res.status(200).json(payments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
