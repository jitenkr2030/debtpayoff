const Notification = require('../models/Notification');

exports.getNotifications = async (userId) => {
  return await Notification.find({ user: userId });
};

exports.createNotification = async (userId, title, message) => {
  const notification = new Notification({ user: userId, title, message });
  await notification.save();
  return notification;
};
