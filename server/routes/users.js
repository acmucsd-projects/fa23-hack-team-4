const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

router.get('/:username', user_controller.user_get);

router.put('/users/:userId/update_password', userController.update_password);

module.exports = router;
