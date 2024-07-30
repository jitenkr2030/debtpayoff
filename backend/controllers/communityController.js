const communityService = require('../services/communityService');

exports.getPosts = async (req, res) => {
  try {
    const posts = await communityService.getPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getForumThreads = async (req, res) => {
  try {
    const threads = await communityService.getForumThreads();
    res.status(200).json(threads);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
