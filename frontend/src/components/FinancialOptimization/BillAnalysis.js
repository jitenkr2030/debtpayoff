import React, { useEffect, useState } from 'react';
import { getBillAnalysis } from '../../services/financialService';

const BillAnalysis = () => {
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const billData = await getBillAnalysis();
        setAnalysis(billData);
      } catch (error) {
        console.error('Failed to fetch bill analysis', error);
      }
    };

    fetchAnalysis();
  }, []);

  return (
    <div>
      <h2>Bill Analysis</h2>
      {analysis ? (
        <div>
          {/* Render bill analysis data */}
          <p>{analysis}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BillAnalysis;

