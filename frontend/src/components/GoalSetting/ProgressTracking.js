import React, { useEffect, useState } from 'react';
import { getGoals } from '../../services/goalService';

const ProgressTracking = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const goalData = await getGoals();
        setGoals(goalData);
      } catch (error) {
        console.error('Failed to fetch goals', error);
      }
    };

    fetchGoals();
  }, []);

  return (
    <div>
      <h2>Progress Tracking</h2>
      {goals.length > 0 ? (
        goals.map((goal, index) => (
          <div key={index}>
            <p>Goal: {goal.goal}</p>
            <p>Amount: ${goal.amount}</p>
            <p>Target Date: {goal.targetDate}</p>
            <p>Progress: {goal.progress}%</p>
          </div>
        ))
      ) : (
        <p>No goals available</p>
      )}
    </div>
  );
};

export default ProgressTracking;
