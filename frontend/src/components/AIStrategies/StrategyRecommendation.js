import React, { useContext, useEffect, useState } from 'react';
import { DebtContext } from '../../contexts/DebtContext';
import { getStrategyRecommendations } from '../../services/aiService';

const StrategyRecommendation = () => {
  const { debts } = useContext(DebtContext);
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const strategy = await getStrategyRecommendations(debts);
        setRecommendation(strategy);
      } catch (error) {
        console.error('Failed to fetch strategy recommendation', error);
      }
    };

    fetchRecommendation();
  }, [debts]);

  return (
    <div>
      <h2>Recommended Strategy</h2>
      {recommendation ? (
        <div>
          <p>{recommendation}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StrategyRecommendation;
