const User = require('./models/User');
const mongoose = require('mongoose');
const config = require('./config/config'); // adjust the path as necessary

mongoose.set('strictQuery', true); // to suppress the warning

mongoose.connect(config.dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// start the server
const app = require('./app'); // or wherever your express app is defined
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
