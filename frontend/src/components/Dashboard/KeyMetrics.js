import React, { useEffect, useState } from 'react';
import { getKeyMetrics } from '../../services/debtService';

const KeyMetrics = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    async function fetchMetrics() {
      const data = await getKeyMetrics();
      setMetrics(data);
    }
    fetchMetrics();
  }, []);

  if (!metrics) return <div>Loading...</div>;

  return (
    <div>
      <h3>Key Metrics</h3>
      <p>Monthly Payment: {metrics.monthlyPayment}</p>
      <p>Debt-Free Date: {metrics.debtFreeDate}</p>
    </div>
  );
};

export default KeyMetrics;
