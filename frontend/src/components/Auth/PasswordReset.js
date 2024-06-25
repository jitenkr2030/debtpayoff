import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const PasswordReset = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword(email);
  };

  return (
    <div>
      <h2>Password Reset</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default PasswordReset;
