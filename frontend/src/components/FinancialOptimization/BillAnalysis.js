import React, { useEffect, useState } from 'react';

const BillAnalysis = () => {
  const [billData, setBillData] = useState([]);

  useEffect(() => {
    // Fetch bill analysis data
    fetch('/api/financial/bill-analysis')
      .then(response => response.json())
      .then(data => setBillData(data));
  }, []);

  return (
    <div>
      <h3>Bill Analysis</h3>
      <ul>
        {billData.map((bill, index) => (
          <li key={index}>{bill.name}: ${bill.amount} due on {bill.dueDate}</li>
        ))}
      </ul>
    </div>
  );
};

export default BillAnalysis;
