const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.get('/google', authController.google);
router.get('/google/success', authController.google_success);
router.get('/google/failure', authController.google_failure);
router.get('/google/callback', authController.google_callback);
router.get('/logout', authController.logout);

module.exports = router;
