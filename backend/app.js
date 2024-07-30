const User = require('./models/User');
const express = require('express');
const app = express();

// Import your routes here
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const debtRoutes = require('./routes/debtRoutes');
// Add other routes as needed

// Middleware to parse JSON bodies
app.use(express.json());

// Use your routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/debts', debtRoutes);
// Add other route usages as needed

// Root route handler
app.get('/', (req, res) => {
  res.send('Welcome to DebtPayoff API');
});

module.exports = app;
