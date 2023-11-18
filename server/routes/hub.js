const express = require('express');
const router = express.Router();

const hub_controller = require('../controllers/hubController');

router.get('/', hub_controller.hub);

router.get('/offers', hub_controller.offer_list);
router.get('/offers/:id', hub_controller.offer_detail);

router.get('/saved-posts', hub_controller.saved_post_list);

module.exports = router;