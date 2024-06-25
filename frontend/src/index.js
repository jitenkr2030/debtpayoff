import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AuthProvider } from './contexts/AuthContext';
import { DebtProvider } from './contexts/DebtContext';
import { PaymentProvider } from './contexts/PaymentContext';
import { GoalProvider } from './contexts/GoalContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DebtProvider>
        <PaymentProvider>
          <GoalProvider>
            <App />
          </GoalProvider>
        </PaymentProvider>
      </DebtProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
