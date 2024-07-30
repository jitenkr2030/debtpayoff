export const addDebt = (debt) => {
  return {
    type: 'ADD_DEBT',
    payload: debt,
  };
};

export const viewDebts = () => {
  return {
    type: 'VIEW_DEBTS',
  };
};

export const manageDebts = (debts) => {
  return {
    type: 'MANAGE_DEBTS',
    payload: debts,
  };
};
