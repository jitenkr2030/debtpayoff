import React from 'react';
import DebtOverview from './DebtOverview';
import KeyMetrics from './KeyMetrics';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <DebtOverview />
      <KeyMetrics />
    </div>
  );
};

export default Dashboard;
