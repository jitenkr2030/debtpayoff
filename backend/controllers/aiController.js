const aiService = require('../services/aiService');

exports.getStrategyRecommendation = async (req, res) => {
  try {
    const strategy = await aiService.getStrategyRecommendation(req.user.id);
    res.status(200).json(strategy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getDynamicPlanAdjustment = async (req, res) => {
  try {
    const adjustment = await aiService.getDynamicPlanAdjustment(req.user.id);
    res.status(200).json(adjustment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRiskAnalysisAlerts = async (req, res) => {
  try {
    const alerts = await aiService.getRiskAnalysisAlerts(req.user.id);
    res.status(200).json(alerts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
