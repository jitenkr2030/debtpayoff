// ./src/components/FinancialRecords/FinancialComponent.js

import React, { useState, useEffect } from 'react';
import {
  createFinancialRecord,
  getFinancialRecords,
  updateFinancialRecord,
  deleteFinancialRecord,
  calculateTotalAmount,
  filterRecordsByType,
  getRecordsByDateRange
} from '../../services/financialService';

const FinancialComponent = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    setRecords(getFinancialRecords());
  }, []);

  const handleAddRecord = () => {
    const newRecord = { type: 'income', amount: 100, date: new Date() };
    const createdRecord = createFinancialRecord(newRecord);
    setRecords([...records, createdRecord]);
  };

  const handleUpdateRecord = (id) => {
    const updates = { amount: 200 };
    const updatedRecord = updateFinancialRecord(id, updates);
    if (updatedRecord) {
      setRecords(records.map(record => (record.id === id ? updatedRecord : record)));
    }
  };

  const handleDeleteRecord = (id) => {
    if (deleteFinancialRecord(id)) {
      setRecords(records.filter(record => record.id !== id));
    }
  };

  const totalAmount = calculateTotalAmount();
  const filteredRecords = filterRecordsByType('income');
  const recordsInDateRange = getRecordsByDateRange(new Date('2024-01-01'), new Date('2024-12-31'));

  return (
    <div>
      <h1>Financial Records</h1>
      <p>Total Amount: {totalAmount}</p>
      <p>Filtered Records (Income): {JSON.stringify(filteredRecords)}</p>
      <p>Records in 2024: {JSON.stringify(recordsInDateRange)}</p>
      <button onClick={handleAddRecord}>Add Record</button>
      {/* Assume the first record exists for the example */}
      {records.length > 0 && (
        <>
          <button onClick={() => handleUpdateRecord(records[0].id)}>Update First Record</button>
          <button onClick={() => handleDeleteRecord(records[0].id)}>Delete First Record</button>
        </>
      )}
      <ul>
        {records.map(record => (
          <li key={record.id}>{`Type: ${record.type}, Amount: ${record.amount}, Date: ${record.date}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default FinancialComponent;
