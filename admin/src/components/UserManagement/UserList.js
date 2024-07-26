import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import adminService from '../../services/adminService';

const UserList = () => {
    const { users, setUsers } = useContext(UserContext);

    useEffect(() => {
        adminService.getUsers().then(setUsers);
    }, [setUsers]);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
