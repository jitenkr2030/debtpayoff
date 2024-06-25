import React, { createContext, useState, useEffect } from 'react';

export const DebtContext = createContext();

export const DebtProvider = ({ children }) => {
  const [debts, setDebts] = useState([]);

  // Add debt management methods as needed (fetch debts, add debt, update debt, delete debt, etc.)

  return (
    <DebtContext.Provider value={{ debts }}>
      {children}
    </DebtContext.Provider>
  );
};
