// Dummy implementation for AI services
exports.getStrategyRecommendation = async (userId) => {
    return { strategy: 'Snowball', details: 'Pay off the smallest debts first.' };
  };
  
  exports.getDynamicPlanAdjustment = async (userId) => {
    return { adjustment: 'Increase payment towards high interest debts.' };
  };
  
  exports.getRiskAnalysisAlerts = async (userId) => {
    return { alerts: ['High risk of default on credit card debt.'] };
  };
  