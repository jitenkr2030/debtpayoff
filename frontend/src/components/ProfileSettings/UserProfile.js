import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Display other user profile information */}
    </div>
  );
};

export default UserProfile;
