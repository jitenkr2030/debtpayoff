const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/posts', authMiddleware, communityController.getPosts);
router.get('/threads', authMiddleware, communityController.getForumThreads);

module.exports = router;
