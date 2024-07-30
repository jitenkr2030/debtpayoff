const Debt = require('../models/Debt');
const debtService = require('../services/debtService');

exports.createDebt = async (req, res) => {
  const { creditor, balance, interestRate, minimumPayment } = req.body;
  try {
    const debt = await debtService.createDebt(req.user.id, creditor, balance, interestRate, minimumPayment);
    res.status(201).json(debt);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getDebts = async (req, res) => {
  try {
    const debts = await debtService.getDebts(req.user.id);
    res.status(200).json(debts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteDebt = async (req, res) => {
  try {
    await debtService.deleteDebt(req.params.id);
    res.status(200).json({ message: 'Debt deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
