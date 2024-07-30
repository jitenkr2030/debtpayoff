import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { manageDebts } from '../../actions/debtActions';

const ManageDebts = () => {
  const debts = useSelector((state) => state.debt.debts);
  const dispatch = useDispatch();

  const handleManage = () => {
    dispatch(manageDebts(debts));
  };

  return (
    <div>
      <h1>Manage Debts</h1>
      <ul>
        {debts.map((debt, index) => (
          <li key={index}>{debt}</li>
        ))}
      </ul>
      <button onClick={handleManage}>Manage Debts</button>
    </div>
  );
};

export default ManageDebts;
