const notificationService = require('../services/notificationService');

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await notificationService.getNotifications(req.user.id);
    res.status(200).json(notifications);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createNotification = async (req, res) => {
  const { title, message } = req.body;
  try {
    const notification = await notificationService.createNotification(req.user.id, title, message);
    res.status(201).json(notification);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
