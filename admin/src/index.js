import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './contexts/AuthContext';
import { UserProvider } from './contexts/UserContext';
import AdminDashboard from './components/AdminDashboard';

ReactDOM.render(
    <AuthProvider>
        <UserProvider>
            <AdminDashboard />
        </UserProvider>
    </AuthProvider>,
    document.getElementById('root')
);
