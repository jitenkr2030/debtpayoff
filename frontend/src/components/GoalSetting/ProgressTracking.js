import React, { useContext, useEffect } from 'react';
import { GoalContext } from '../../contexts/GoalContext';

const ProgressTracking = () => {
  const { goals, fetchGoals } = useContext(GoalContext);

  useEffect(() => {
    fetchGoals();
  }, [fetchGoals]);

  return (
    <div>
      <h3>Progress Tracking</h3>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            {goal.name}: ${goal.savedAmount} / ${goal.targetAmount}
