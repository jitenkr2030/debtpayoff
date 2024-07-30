const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/strategy', authMiddleware, aiController.getStrategyRecommendation);
router.get('/adjustment', authMiddleware, aiController.getDynamicPlanAdjustment);
router.get('/alerts', authMiddleware, aiController.getRiskAnalysisAlerts);

module.exports = router;
