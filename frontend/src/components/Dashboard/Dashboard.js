import React from 'react';
import DebtOverview from './DebtOverview';
import KeyMetrics from './KeyMetrics';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <KeyMetrics />
      <DebtOverview />
    </div>
  );
};

export default Dashboard;
