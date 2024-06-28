// src/components/FinancialOptimization/BillAnalysis.js

import React, { useEffect, useState } from 'react';
import { getBillAnalysis } from '../../services/financialService';

const BillAnalysis = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBillAnalysis();
      setBills(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Bill Analysis</h2>
      <ul>
        {bills.map(bill => (
          <li key={bill.id}>
            {bill.name}: ${bill.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillAnalysis;
