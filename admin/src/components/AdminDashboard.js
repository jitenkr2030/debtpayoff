import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './UserManagement/UserList';
import UserDetail from './UserManagement/UserDetail';
import ResourceList from './ContentManagement/ResourceList';
import ResourceDetail from './ContentManagement/ResourceDetail';
import UsageMetrics from './Analytics/UsageMetrics';
import FinancialStatistics from './Analytics/FinancialStatistics';
import FeatureToggles from './SystemConfiguration/FeatureToggles';
import SecuritySettings from './SystemConfiguration/SecuritySettings';

const AdminDashboard = () => (
    <Router>
        <div>
            <h1>Admin Dashboard</h1>
            <Switch>
                <Route path="/users" component={UserList} />
                <Route path="/user/:id" component={UserDetail} />
                <Route path="/resources" component={ResourceList} />
                <Route path="/resource/:id" component={ResourceDetail} />
                <Route path="/usage-metrics" component={UsageMetrics} />
                <Route path="/financial-statistics" component={FinancialStatistics} />
                <Route path="/feature-toggles" component={FeatureToggles} />
                <Route path="/security-settings" component={SecuritySettings} />
            </Switch>
        </div>
    </Router>
);

export default AdminDashboard;
