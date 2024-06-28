// src/components/Dashboard/DebtListView.js

import React from 'react';

const DebtListView = ({ debts }) => {
  return (
    <div>
      <h2>Debt List</h2>
      <ul>
        {debts.map(debt => (
          <li key={debt.id}>
            {debt.name}: ${debt.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DebtListView;
