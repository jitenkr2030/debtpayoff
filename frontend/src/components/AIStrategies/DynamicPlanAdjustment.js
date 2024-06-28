// src/components/AIStrategies/DynamicPlanAdjustment.js

import React, { useEffect, useState } from 'react';
import { getDynamicPlanAdjustments } from '../../services/aiService';

const DynamicPlanAdjustment = () => {
  const [adjustments, setAdjustments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDynamicPlanAdjustments();
      setAdjustments(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dynamic Plan Adjustments</h2>
      <ul>
        {adjustments.map(adjustment => (
          <li key={adjustment.id}>
            {adjustment.description}: ${adjustment.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicPlanAdjustment;
