import React, { useState } from 'react';
import { updateSecuritySettings } from '../../services/userService';

const SecuritySettings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUpdateSecurity = async (e) => {
    e.preventDefault();
    try {
      await updateSecuritySettings({ currentPassword, newPassword });
      // Optionally, reset form fields or show success message
    } catch (error) {
      console.error('Failed to update security settings', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <h2>Security Settings</h2>
      <form onSubmit={handleUpdateSecurity}>
        <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Current Password" />
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default SecuritySettings;
