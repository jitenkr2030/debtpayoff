import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import PasswordReset from './Auth/PasswordReset';
import Dashboard from './Dashboard/Dashboard';
import DebtInputPanel from './DebtManagement/DebtInputPanel';
import DebtListView from './DebtManagement/DebtListView';
import DebtDetailView from './DebtManagement/DebtDetailView';
import StrategyRecommendation from './AIStrategies/StrategyRecommendation';
import DynamicPlanAdjustment from './AIStrategies/DynamicPlanAdjustment';
import RiskAnalysisAlerts from './AIStrategies/RiskAnalysisAlerts';
import PaymentSetup from './AutomatedPayments/PaymentSetup';
import PaymentHistory from './AutomatedPayments/PaymentHistory';
import SpendingAnalysis from './FinancialOptimization/SpendingAnalysis';
import BillAnalysis from './FinancialOptimization/BillAnalysis';
import GoalCreation from './GoalSetting/GoalCreation';
import ProgressTracking from './GoalSetting/ProgressTracking';
import SocialFeed from './Community/SocialFeed';
import DiscussionForums from './Community/DiscussionForums';
import ResourceLibrary from './EducationalResources/ResourceLibrary';
import WebinarsWorkshops from './EducationalResources/WebinarsWorkshops';
import CustomAlerts from './Notifications/CustomAlerts';
import UserProfile from './ProfileSettings/UserProfile';
import AppSettings from './ProfileSettings/AppSettings';
import SubscriptionManagement from './Premium/SubscriptionManagement';
import PremiumFeatures from './Premium/PremiumFeatures';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/reset-password" component={PasswordReset} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add-debt" component={DebtInputPanel} />
        <Route path="/debts" component={DebtListView} />
        <Route path="/debt/:id" component={DebtDetailView} />
        <Route path="/recommendation" component={StrategyRecommendation} />
        <Route path="/adjustment" component={DynamicPlanAdjustment} />
        <Route path="/risk-alerts" component={RiskAnalysisAlerts} />
        <Route path="/setup-payment" component={PaymentSetup} />
        <Route path="/payment-history" component={PaymentHistory} />
        <Route path="/spending-analysis" component={SpendingAnalysis} />
        <Route path="/bill-analysis" component={BillAnalysis} />
        <Route path="/create-goal" component={GoalCreation} />
        <Route path="/track-progress" component={ProgressTracking} />
        <Route path="/social-feed" component={SocialFeed} />
        <Route path="/discussion-forums" component={DiscussionForums} />
        <Route path="/resource-library" component={ResourceLibrary} />
        <Route path="/webinars-workshops" component={WebinarsWorkshops} />
        <Route path="/custom-alerts" component={CustomAlerts} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/app-settings" component={AppSettings} />
        <Route path="/subscription-management" component={SubscriptionManagement} />
        <Route path="/premium-features" component={PremiumFeatures} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
