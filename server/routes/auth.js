const express = require('express');
const router = express.Router();

const auth_controller = require('../controllers/authController');

router.get('/google', auth_controller.google);
router.get('/google/success', auth_controller.google_success);
router.get('/google/failure', auth_controller.google_failure);
router.get('/google/callback', auth_controller.google_callback);
router.get('/logout', auth_controller.logout);

module.exports = router;
