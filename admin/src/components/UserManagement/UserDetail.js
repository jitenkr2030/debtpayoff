import React, { useState, useEffect } from 'react';
import adminService from '../../services/adminService';

const UserDetail = ({ userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        adminService.getUser(userId).then(setUser);
    }, [userId]);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Joined: {user.joined}</p>
        </div>
    );
};

export default UserDetail;
