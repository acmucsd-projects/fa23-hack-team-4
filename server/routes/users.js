const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

//router.get('/', user_controller.user_list);
router.get('/:username', user_controller.viewProfile);

module.exports = router;
