module.exports = {
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/debt-app',
    JWT_SECRET: process.env.JWT_SECRET || 'secretkey'
    // Add other configuration variables as needed
  };
  