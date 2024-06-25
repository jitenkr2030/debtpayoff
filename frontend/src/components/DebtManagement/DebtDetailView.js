import React from 'react';

const DebtDetailView = ({ debt, onDelete }) => {
  const { creditor, balance, interestRate, minimumPayment } = debt;

  return (
    <div>
      <h4>{creditor}</h4>
      <p>Balance: ${balance}</p>
      <p>Interest Rate: {interestRate}%</p>
      <p>Minimum Payment: ${minimumPayment}</p>
      <button onClick={() => onDelete(debt._id)}>Delete</button>
    </div>
  );
};

export default DebtDetailView;

