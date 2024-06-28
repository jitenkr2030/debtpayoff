import React, { useState } from 'react';
import { sendNotification } from '../../services/notificationService';

const CustomAlerts = () => {
  const [alertType, setAlertType] = useState('');
  const [threshold, setThreshold] = useState('');

  const handleSetAlert = async (e) => {
    e.preventDefault();
    try {
      await setCustomAlerts({ alertType, threshold });
      // Optionally, reset form fields or show success message
    } catch (error) {
      console.error('Failed to set custom alert', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <h2>Set Custom Alerts</h2>
      <form onSubmit={handleSetAlert}>
        <input type="text" value={alertType} onChange={(e) => setAlertType(e.target.value)} placeholder="Alert Type" />
        <input type="number" value={threshold} onChange={(e) => setThreshold(e.target.value)} placeholder="Threshold" />
        <button type="submit">Set Alert</button>
      </form>
    </div>
  );
};

export default CustomAlerts;
