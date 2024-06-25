import React, { useState } from 'react';
import { addDebt } from '../../services/debtService';

const DebtInputPanel = () => {
  const [creditor, setCreditor] = useState('');
  const [balance, setBalance] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [minimumPayment, setMinimumPayment] = useState('');

  const handleAddDebt = async (e) => {
    e.preventDefault();
    try {
      await addDebt({ creditor, balance, interestRate, minimumPayment });
      // Optionally, reset form fields or show success message
    } catch (error) {
      console.error('Failed to add debt', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <h2>Add New Debt</h2>
      <form onSubmit={handleAddDebt}>
        <input type="text" value={creditor} onChange={(e) => setCreditor(e.target.value)} placeholder="Creditor" />
        <input type="number" value={balance} onChange={(e) => setBalance(e.target.value)} placeholder="Balance" />
        <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder="Interest Rate" />
        <input type="number" value={minimumPayment} onChange={(e) => setMinimumPayment(e.target.value)} placeholder="Minimum Payment" />
        <button type="submit">Add Debt</button>
      </form>
    </div>
  );
};

export default DebtInputPanel;
