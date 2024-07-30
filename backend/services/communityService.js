const Post = require('../models/Post');

exports.getPosts = async () => {
  return await Post.find().populate('user', 'name');
};

exports.getForumThreads = async () => {
  // Implement fetching forum threads logic
  return [];
};
