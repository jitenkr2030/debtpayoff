import React, { useState } from 'react';
import { resetPassword } from '../../services/authService';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setResetSent(true);
    } catch (error) {
      console.error('Password reset failed', error);
      // Handle password reset failure (e.g., show error message)
    }
  };

  return (
    <div>
      {resetSent ? (
        <p>Password reset email sent. Check your inbox.</p>
      ) : (
        <form onSubmit={handleReset}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default PasswordReset;
