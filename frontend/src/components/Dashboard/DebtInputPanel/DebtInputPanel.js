// src/components/DebtInputPanel/DebtInputPanel.js
import React, { useState } from 'react';

const DebtInputPanel = () => {
  const [debts, setDebts] = useState([]);

  const addDebt = (debt) => {
    setDebts([...debts, debt]);
  };

  return (
    <div>
      <h2>Debt Input Panel</h2>
      <form onSubmit={(e) => { e.preventDefault(); addDebt({ creditor: '', balance: '', interestRate: '', minimumPayment: '' }); }}>
        {/* Add input fields for creditor, balance, interest rate, and minimum payment */}
        <button type="submit">Add Debt</button>
      </form>
      <ul>
        {debts.map((debt, index) => (
          <li key={index}>{debt.creditor} - ${debt.balance} at {debt.interestRate}%</li>
        ))}
      </ul>
    </div>
  );
};

export default DebtInputPanel;
