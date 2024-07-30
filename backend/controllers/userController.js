const userService = require('../services/userService');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await userService.getUserProfile(req.user.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const updatedUser = await userService.updateUserProfile(req.user.id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateSecuritySettings = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  try {
    await userService.updateSecuritySettings(req.user.id, currentPassword, newPassword);
    res.status(200).json({ message: 'Security settings updated successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
