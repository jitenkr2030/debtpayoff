const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  goal: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  targetDate: {
    type: Date,
    required: true,
  },
});

const Goal = mongoose.model('Goal', GoalSchema);

module.exports = Goal;
