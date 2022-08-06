const express = require('express');
const router = express.Router();
const postController = require('../controllers/post_controller');
const isAuthenticated = require('../middlewares/auth')
router.post('/posts/upload',isAuthenticated.isAuthenticated,postController.createPost);
router.get('/post/:id',isAuthenticated.isAuthenticated,postController.likeAndUnlikePost);
router.delete('/post/:id',isAuthenticated.isAuthenticated,postController.deletePost);
module.exports = router;