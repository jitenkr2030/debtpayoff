import React, { useContext } from 'react';
import { DebtContext } from '../../contexts/DebtContext';
import DebtDetailView from './DebtDetailView';

const DebtListView = ({ debts }) => {
  const { deleteDebt } = useContext(DebtContext);

  const handleDelete = async (debtId) => {
    try {
      await deleteDebt(debtId);
      // Optionally, update state or show success message
    } catch (error) {
      console.error('Failed to delete debt', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <h3>Debts</h3>
      {debts.map((debt) => (
        <div key={debt._id}>
          <DebtDetailView debt={debt} onDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
};

export default DebtListView;
