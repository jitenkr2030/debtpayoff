import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to Debtpayoff</h1>
        <p className="home-subtitle">Automate debt management with AI insights</p>
        <button className="home-get-started">Get Started</button>
      </header>
      <section className="home-how-it-works">
        <h2 className="section-title">How it works</h2>
        <div className="how-it-works-cards">
          <div className="how-it-works-card">
            <h3>Connect your accounts</h3>
            <p>Consolidate all your financial information in one place for a better overview.</p>
          </div>
          <div className="how-it-works-card">
            <h3>Get personalized recommendations</h3>
            <p>Receive tailored advice and monitor your financial health over time.</p>
          </div>
          <div className="how-it-works-card">
            <h3>Feel safe with bank-level security</h3>
            <p>Rest assured knowing your data is protected with top-notch security measures.</p>
          </div>
          <div className="how-it-works-card">
            <h3>Set up autopay</h3>
            <p>Automate payments to never miss a due date and improve your credit.</p>
          </div>
          <div className="how-it-works-card">
            <h3>Adjust your payment strategy</h3>
            <p>Adapt your plan as your financial situation changes.</p>
          </div>
          <div className="how-it-works-card">
            <h3>Reach out to our team</h3>
            <p>Get support from our experts whenever you need it.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
