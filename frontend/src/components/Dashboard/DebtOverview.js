import React, { useContext } from 'react';
import { DebtContext } from '../../contexts/DebtContext';

const DebtOverview = () => {
  const { debts } = useContext(DebtContext);

  return (
    <div>
      <h3>Debt Overview</h3>
      <ul>
        {debts.map((debt) => (
          <li key={debt.id}>
            {debt.creditor}: ${debt.balance} @ {debt.interestRate}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DebtOverview;
