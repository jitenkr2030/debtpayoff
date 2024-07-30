const mongoose = require('mongoose');
const User = require('../models/userModel');
const Debt = require('../models/debtModel');
const Payment = require('../models/paymentModel');
const Goal = require('../models/goalModel');
const Post = require('../models/postModel');
const Notification = require('../models/notificationModel');
const config = require('../config/config');

const seedData = async () => {
  await mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Clear existing data
    await User.deleteMany();
    await Debt.deleteMany();
    await Payment.deleteMany();
    await Goal.deleteMany();
    await Post.deleteMany();
    await Notification.deleteMany();

    // Create initial users
    const user1 = new User({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    });

    const user2 = new User({
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: 'password123',
    });

    await user1.save();
    await user2.save();

    // Create initial debts
    const debt1 = new Debt({
      user: user1._id,
      creditor: 'Credit Card Company',
      balance: 5000,
      interestRate: 18.99,
      minimumPayment: 150,
    });

    const debt2 = new Debt({
      user: user2._id,
      creditor: 'Student Loan Servicer',
      balance: 20000,
      interestRate: 4.5,
      minimumPayment: 200,
    });

    await debt1.save();
    await debt2.save();

    console.log('Initial data seeded!');
    process.exit();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

seedData();
