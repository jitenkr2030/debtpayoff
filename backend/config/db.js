const mongoose = require('mongoose');
const config = require('./config');

mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    await mongoose.connect(config.dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
