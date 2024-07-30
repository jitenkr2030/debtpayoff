const Goal = require('../models/Goal');

exports.createGoal = async (userId, goal, amount, targetDate) => {
  const newGoal = new Goal({ user: userId, goal, amount, targetDate });
  await newGoal.save();
  return newGoal;
};

exports.getGoals = async (userId) => {
  return await Goal.find({ user: userId });
};
