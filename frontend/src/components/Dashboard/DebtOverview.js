import React, { useEffect, useState } from 'react';
import { getDebtOverview } from '../../services/debtService';

const DebtOverview = () => {
  const [overview, setOverview] = useState(null);

  useEffect(() => {
    async function fetchOverview() {
      const data = await getDebtOverview();
      setOverview(data);
    }
    fetchOverview();
  }, []);

  if (!overview) return <div>Loading...</div>;

  return (
    <div>
      <h3>Debt Overview</h3>
      <p>Total Debt: {overview.totalDebt}</p>
      <p>Interest Rate: {overview.interestRate}</p>
    </div>
  );
};

export default DebtOverview;

