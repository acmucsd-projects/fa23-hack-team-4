const express = require('express');
const router = express.Router();
const offer_controller = require('../controllers/offerController');

router.delete('/:id', offer_controller.delete_offer);

module.exports = router;
