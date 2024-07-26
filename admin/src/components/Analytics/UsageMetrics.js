import React, { useEffect, useState } from 'react';
import adminService from '../../services/adminService';

const UsageMetrics = () => {
    const [metrics, setMetrics] = useState(null);

    useEffect(() => {
        adminService.getUsageMetrics().then(setMetrics);
    }, []);

    if (!metrics) return <div>Loading...</div>;

    return (
        <div>
            <h2>Usage Metrics</h2>
            <p>Total Users: {metrics.totalUsers}</p>
            <p>Active Users: {metrics.activeUsers}</p>
        </div>
    );
};

export default UsageMetrics;
