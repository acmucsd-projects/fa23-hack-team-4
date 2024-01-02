const express = require('express');
const router = express.Router();
const post_controller = require('../controllers/postController');

router.get('/', post_controller.post_list);

router.get('/category/:name', post_controller.post_category_get);

router.post('/', post_controller.post_create);

router.get('/:id', post_controller.post_get);

router.put('/:id', post_controller.post_put);

router.delete('/:id', post_controller.post_delete);

router.delete('/:id', post_controller.delete_post);

module.exports = router;