import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await resetPassword(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Password Reset</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default PasswordReset;
