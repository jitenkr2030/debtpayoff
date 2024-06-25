import React, { useContext, useEffect, useState } from 'react';
import { DebtContext } from '../../contexts/DebtContext';

const StrategyRecommendation = () => {
  const { debts } = useContext(DebtContext);
  const [strategy, setStrategy] = useState('');

  useEffect(() => {
    // Call the AI service to get the strategy recommendation
    fetch('/api/ai/strategy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ debts }),
    })
      .then(response => response.json())
      .then(data => setStrategy(data.recommendation));
  }, [debts]);

  return (
    <div>
      <h3>Strategy Recommendation</h3>
      <p>{strategy}</p>
    </div>
  );
};

export default StrategyRecommendation;
