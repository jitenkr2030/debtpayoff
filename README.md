# DeptPayoff

DeptPayoff: Automate Your Way Out of Debt

## Overview

DeptPayoff is an intelligent application designed to help users become debt-free faster by providing automated tools, personalized strategies, and AI-powered insights for debt repayment.

## Features

- Secure account connection
- Debt input panel
- AI-powered debt payoff strategies
- Automated debt payments
- AI chatbot coach
- Personalized tips and recommendations
- Financial optimization and automation
- Goal setting and tracking
- Community and support
- Admin management panel

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB
- Python
- Plaid, Stripe, Twilio, Firebase API keys

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/debtpayoff.in.git
    cd debtpayoff.in
    ```

2. Install dependencies for backend and frontend:
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3. Set up environment variables. Create a `.env` file in the backend and frontend directories with the following variables:
    ```dotenv
    // backend/.env
    PLAID_CLIENT_ID=your_plaid_client_id
    PLAID_SECRET=your_plaid_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key
    FIREBASE_SERVICE_ACCOUNT=path_to_your_service_account.json
    TWILIO_ACCOUNT_SID=your_twilio_account_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    ```

4. Run migrations and seed the database:
    ```bash
    cd backend
    npm run migrate
    npm run seed
    ```

5. Start the backend and frontend servers:
    ```bash
    cd backend
    npm start
    cd ../frontend
    npm start
    ```

### Usage

Navigate to `http://localhost:3000` to view the application.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
