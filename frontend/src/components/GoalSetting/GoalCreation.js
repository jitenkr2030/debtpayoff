import React, { useState } from 'react';
import { createGoal } from '../../services/goalService';

const GoalCreation = () => {
  const [goal, setGoal] = useState('');
  const [amount, setAmount] = useState('');
  const [targetDate, setTargetDate] = useState('');

  const handleCreateGoal = async (e) => {
    e.preventDefault();
    try {
      await createGoal({ goal, amount, targetDate });
      // Optionally, reset form fields or show success message
    } catch (error) {
      console.error('Failed to create goal', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <h2>Create New Goal</h2>
      <form onSubmit={handleCreateGoal}>
        <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="Goal" />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
        <input type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} placeholder="Target Date" />
        <button type="submit">Create Goal</button>
      </form>
    </div>
  );
};

export default GoalCreation;
