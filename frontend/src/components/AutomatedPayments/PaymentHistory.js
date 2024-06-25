import React, { useContext, useEffect } from 'react';
import { PaymentContext } from '../../contexts/PaymentContext';

const PaymentHistory = () => {
  const { payments, fetchPayments } = useContext(PaymentContext);

  useEffect(() => {
    fetchPayments();
  }, [fetchPayments]);

  return (
    <div>
      <h3>Payment History</h3>
      <ul>
        {payments.map((payment) => (
          <li key={payment.id}>
            {payment.date}: ${payment.amount} to {payment.account}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentHistory;
