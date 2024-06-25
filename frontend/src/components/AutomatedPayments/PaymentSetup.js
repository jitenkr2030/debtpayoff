import React, { useState } from 'react';
import { setupAutomatedPayments } from '../../services/paymentService';

const PaymentSetup = () => {
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSetup = async (e) => {
    e.preventDefault();
    try {
      await setupAutomatedPayments({ amount, frequency });
      // Optionally, reset form fields or show success message
    } catch (error) {
      console.error('Failed to set up automated payments', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <h2>Setup Automated Payments</h2>
      <form onSubmit={handleSetup}>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
        <input type="text" value={frequency} onChange={(e) => setFrequency(e.target.value)} placeholder="Frequency" />
        <button type="submit">Setup</button>
      </form>
    </div>
  );
};

export default PaymentSetup;
