import React from 'react';

const DebtDetailView = ({ debt }) => {
  return (
    <div>
      <h3>Debt Details</h3>
      <p>Creditor: {debt.creditor}</p>
      <p>Balance: ${debt.balance}</p>
      <p>Interest Rate: {debt.interestRate}%</p>
      <p>Minimum Payment: ${debt.minimumPayment}</p>
    </div>
  );
};

export default DebtDetailView;
