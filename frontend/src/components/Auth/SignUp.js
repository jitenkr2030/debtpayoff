import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../../services/authService';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      history.push('/dashboard');
    } catch (error) {
      console.error('Sign up failed', error);
      // Handle sign up failure (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
