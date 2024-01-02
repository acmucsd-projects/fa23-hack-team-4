const express = require('express');
const router = express.Router();

const offer_controller = require('../controllers/offerController');

router.get('/', offer_controller.offer_list);

router.post('/', offer_controller.offer_create);

router.get('/:id', offer_controller.offer_get);

router.put('/:id', offer_controller.offer_put);

module.exports = router;
