const express = require('express')
const router = express.Router()
const postsController = require('../controllers/posts') 
const profileController = require("../controllers/profile");
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.delete('/deletePost', profileController.deletePost)

router.get('/', ensureAuth, postsController.getPosts)

router.post('/createPost', postsController.createPost)

router.put('/likePost', postsController.likePost)

router.delete('/deletePost', postsController.deletePost)

module.exports = router;
