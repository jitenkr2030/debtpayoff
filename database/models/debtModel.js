const mongoose = require('mongoose');

const DebtSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  creditor: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  interestRate: {
    type: Number,
    required: true,
  },
  minimumPayment: {
    type: Number,
    required: true,
  },
});

const Debt = mongoose.model('Debt', DebtSchema);

module.exports = Debt;
