import React, { useEffect, useState } from 'react';
import { getUserProfile, updateUserProfile } from '../../services/userService';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getUserProfile();
        setProfile(profileData);
      } catch (error) {
        console.error('Failed to fetch user profile', error);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(profile);
      setEditMode(false);
    } catch (error) {
      console.error('Failed to update profile', error);
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      {profile ? (
        editMode ? (
          <form onSubmit={handleUpdateProfile}>
            <input type="text" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
            <input type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
            <button type="submit">Save</button>
          </form>
        ) : (
          <div>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <button onClick={() => setEditMode(true)}>Edit</button>
          </div>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
