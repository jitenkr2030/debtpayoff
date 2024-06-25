import React from 'react';
import DebtOverview from './DebtOverview';
import KeyMetrics from './KeyMetrics';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <KeyMetrics />
      <DebtOverview />
    </div>
  );
};

export default Dashboard;
