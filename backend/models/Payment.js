const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  debt: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Debt',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;
