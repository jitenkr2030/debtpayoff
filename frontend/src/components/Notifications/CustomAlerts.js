import React, { useContext } from 'react';
import { NotificationContext } from '../../contexts/NotificationContext';

const CustomAlerts = () => {
  const { alerts } = useContext(NotificationContext);

  return (
    <div>
      <h3>Custom Alerts</h3>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>{alert}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomAlerts;
