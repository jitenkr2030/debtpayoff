import React, { useEffect, useState } from 'react';
import { getDynamicPlanAdjustments } from '../../services/aiService';

const DynamicPlanAdjustment = () => {
  const [adjustments, setAdjustments] = useState(null);

  useEffect(() => {
    const fetchAdjustments = async () => {
      try {
        const adjustmentData = await getDynamicPlanAdjustments();
        setAdjustments(adjustmentData);
      } catch (error) {
        console.error('Failed to fetch dynamic plan adjustments', error);
      }
    };

    fetchAdjustments();
  }, []);

  return (
    <div>
      <h2>Dynamic Plan Adjustments</h2>
      {adjustments ? (
        <div>
          {adjustments.map((adjustment, index) => (
            <div key={index}>
              <p>{adjustment}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DynamicPlanAdjustment;
