import React, { useState, useContext } from 'react';
import { GoalContext } from '../../contexts/GoalContext';

const GoalCreation = () => {
  const { createGoal } = useContext(GoalContext);
  const [goalName, setGoalName] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createGoal({ goalName, amount, dueDate });
    setGoalName('');
    setAmount('');
    setDueDate('');
  };

  return (
    <div>
      <h3>Create Goal</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Goal Name"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          placeholder="Due Date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit">Create Goal</button>
      </form>
    </div>
  );
};

export default GoalCreation;
