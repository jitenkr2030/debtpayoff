import React, { useEffect, useState } from 'react';
import { getPaymentHistory } from '../../services/paymentService';

const PaymentHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const paymentHistory = await getPaymentHistory();
        setHistory(paymentHistory);
      } catch (error) {
        console.error('Failed to fetch payment history', error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <h2>Payment History</h2>
      {history.length > 0 ? (
        history.map((payment, index) => (
          <div key={index}>
            <p>Amount: ${payment.amount}</p>
            <p>Date: {payment.date}</p>
          </div>
        ))
      ) : (
        <p>No payment history available</p>
      )}
    </div>
  );
};

export default PaymentHistory;
