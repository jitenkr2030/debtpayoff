import React, { useEffect, useState } from 'react';
import { getSpendingAnalysis } from '../../services/financialService';

const SpendingAnalysis = () => {
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const spendingData = await getSpendingAnalysis();
        setAnalysis(spendingData);
      } catch (error) {
        console.error('Failed to fetch spending analysis', error);
      }
    };

    fetchAnalysis();
  }, []);

  return (
    <div>
      <h2>Spending Analysis</h2>
      {analysis ? (
        <div>
          {/* Render spending analysis data */}
          <p>{analysis}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SpendingAnalysis;
