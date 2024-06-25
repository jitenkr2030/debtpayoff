import React, { useContext } from 'react';
import { DebtContext } from '../../contexts/DebtContext';

const KeyMetrics = () => {
  const { totalDebt, totalInterest } = useContext(DebtContext);

  return (
    <div>
      <h3>Key Metrics</h3>
      <p>Total Debt: ${totalDebt}</p>
      <p>Total Interest: ${totalInterest}</p>
    </div>
  );
};

export default KeyMetrics;
