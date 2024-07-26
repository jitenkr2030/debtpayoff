import React, { useEffect, useState } from 'react';
import adminService from '../../services/adminService';

const FinancialStatistics = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        adminService.getFinancialStatistics().then(setStats);
    }, []);

    if (!stats) return <div>Loading...</div>;

    return (
        <div>
            <h2>Financial Statistics</h2>
            <p>Total Debt Managed: {stats.totalDebt}</p>
            <p>Total Payments Made: {stats.totalPayments}</p>
        </div>
    );
};

export default FinancialStatistics;
