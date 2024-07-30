const mongoose = require('mongoose');
const config = require('./config/config');
const User = require('./models/user');

mongoose.connect(config.dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully');

  User.find({}, (err, users) => {
    if (err) {
      console.error('Error retrieving users:', err);
    } else {
      console.log('Users:', users);
    }
    mongoose.connection.close();
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
