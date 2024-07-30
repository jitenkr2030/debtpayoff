import React from 'react';
import { useSelector } from 'react-redux';

const ViewDebts = () => {
  const debts = useSelector((state) => state.debt.debts);

  return (
    <div>
      <h1>View Debts</h1>
      <ul>
        {debts.map((debt, index) => (
          <li key={index}>{debt}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewDebts;
