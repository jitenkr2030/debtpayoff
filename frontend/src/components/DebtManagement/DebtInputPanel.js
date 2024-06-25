import React, { useState, useContext } from 'react';
import { DebtContext } from '../../contexts/DebtContext';

const DebtInputPanel = () => {
  const { addDebt } = useContext(DebtContext);
  const [creditor, setCreditor] = useState('');
  const [balance, setBalance] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [minimumPayment, setMinimumPayment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDebt({ creditor, balance, interestRate, minimumPayment });
    setCreditor('');
    setBalance('');
    setInterestRate('');
    setMinimumPayment('');
  };

  return (
    <div>
      <h3>Add Debt</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Creditor"
          value={creditor}
          onChange={(e) => setCreditor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Balance"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
        <input
          type="number"
          placeholder="Interest Rate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum Payment"
          value={minimumPayment}
          onChange={(e) => setMinimumPayment(e.target.value)}
        />
        <button type="submit">Add Debt</button>
      </form>
    </div>
  );
};

export default DebtInputPanel;
