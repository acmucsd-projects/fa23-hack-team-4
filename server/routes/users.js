const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

router.get('/:username', user_controller.user_get);

module.exports = router;
