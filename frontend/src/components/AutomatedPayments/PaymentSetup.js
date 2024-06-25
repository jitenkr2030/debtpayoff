import React, { useState, useContext } from 'react';
import { PaymentContext } from '../../contexts/PaymentContext';

const PaymentSetup = () => {
  const { setupPayment } = useContext(PaymentContext);
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setupPayment({ account, amount });
    setAccount('');
    setAmount('');
  };

  return (
    <div>
      <h3>Setup Automated Payment</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Account"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Setup Payment</button>
      </form>
    </div>
  );
};

export default PaymentSetup;
