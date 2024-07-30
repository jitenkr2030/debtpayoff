// src/components/Dashboard/Dashboard.js
import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { getDashboardData } from '../../services/apiService';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await getDashboardData();
        setDashboardData(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch dashboard data');
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Your Debtpayoff Dashboard</h1>
        <p className="dashboard-subtitle">Track your progress and manage your debt efficiently</p>
      </header>
      <section className="dashboard-overview">
        <div className="dashboard-card">
          <h2>Total Debt</h2>
          <p>${dashboardData.totalDebt}</p>
        </div>
        <div className="dashboard-card">
          <h2>Monthly Payment</h2>
          <p>${dashboardData.monthlyPayment}</p>
        </div>
        <div className="dashboard-card">
          <h2>Interest Rate</h2>
          <p>{dashboardData.interestRate}%</p>
        </div>
        <div className="dashboard-card">
          <h2>Estimated Payoff Date</h2>
          <p>{dashboardData.estimatedPayoffDate}</p>
        </div>
      </section>
      <section className="dashboard-charts">
        <div className="chart-card">
          <h3>Debt Reduction Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dashboardData.debtReductionProgress}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="amount" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-card">
          <h3>Payment History</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dashboardData.paymentHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="payment" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
      <section className="dashboard-actions">
        <button className="dashboard-action-btn">Make a Payment</button>
        <button className="dashboard-action-btn">Adjust Payment Strategy</button>
        <button className="dashboard-action-btn">View Detailed Report</button>
      </section>
    </div>
  );
}

export default Dashboard;
