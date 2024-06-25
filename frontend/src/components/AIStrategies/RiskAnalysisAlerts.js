import React, { useEffect, useState } from 'react';
import { getRiskAlerts } from '../../services/aiService';

const RiskAnalysisAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const alertData = await getRiskAlerts();
        setAlerts(alertData);
      } catch (error) {
        console.error('Failed to fetch risk alerts', error);
      }
    };

    fetchAlerts();
  }, []);

  return (
    <div>
      <h2>Risk Analysis Alerts</h2>
      {alerts.length > 0 ? (
        alerts.map((alert, index) => (
          <div key={index}>
            <p>{alert.message}</p>
          </div>
        ))
      ) : (
        <p>No alerts</p>
      )}
    </div>
  );
};

export default RiskAnalysisAlerts;
