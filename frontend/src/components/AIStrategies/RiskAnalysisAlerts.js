import React, { useState, useEffect } from 'react';

const RiskAnalysisAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Fetch risk analysis alerts from AI service
    fetch('/api/ai/risk-alerts')
      .then(response => response.json())
      .then(data => setAlerts(data.alerts));
  }, []);

  return (
    <div>
      <h3>Risk Analysis Alerts</h3>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>{alert}</li>
        ))}
      </ul>
    </div>
  );
};

export default RiskAnalysisAlerts;
