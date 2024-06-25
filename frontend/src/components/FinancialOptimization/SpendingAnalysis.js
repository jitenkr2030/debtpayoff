import React, { useEffect, useState } from 'react';

const SpendingAnalysis = () => {
  const [spendingData, setSpendingData] = useState([]);

  useEffect(() => {
    // Fetch spending analysis data
    fetch('/api/financial/spending-analysis')
      .then(response => response.json())
      .then(data => setSpendingData(data));
  }, []);

  return (
    <div>
      <h3>Spending Analysis</h3>
      <ul>
        {spendingData.map((item, index) => (
          <li key={index}>{item.category}: ${item.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpendingAnalysis;
