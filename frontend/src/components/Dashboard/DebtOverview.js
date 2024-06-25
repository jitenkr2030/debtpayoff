import React, { useContext, useEffect, useState } from 'react';
import { DebtContext } from '../../contexts/DebtContext';
import DebtListView from './DebtListView';

const DebtOverview = () => {
  const { debts, fetchDebts } = useContext(DebtContext);

  useEffect(() => {
    fetchDebts();
  }, [fetchDebts]);

  return (
    <div>
      <h2>Debt Overview</h2>
      <DebtListView debts={debts} />
    </div>
  );
};

export default DebtOverview;
