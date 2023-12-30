const express = require('express');
const router = express.Router();
const post_controller = require('../controllers/postController');

router.get('/', post_controller.post_list);

router.get('/category/:name', post_controller.post_category_get);

router.get('/create-post', post_controller.post_create_get);

router.post('/create-post', post_controller.post_create_post);

router.get('/:id', post_controller.post_detail);

router.delete('/:id', post_controller.delete_post);

module.exports = router;