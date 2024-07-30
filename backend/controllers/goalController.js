const goalService = require('../services/goalService');

exports.createGoal = async (req, res) => {
  const { goal, amount, targetDate } = req.body;
  try {
    const newGoal = await goalService.createGoal(req.user.id, goal, amount, targetDate);
    res.status(201).json(newGoal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getGoals = async (req, res) => {
  try {
    const goals = await goalService.getGoals(req.user.id);
    res.status(200).json(goals);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
