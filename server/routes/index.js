const express = require('express');
const router = express.Router();

const index_controller = require('../controllers/indexController');

router.get('/me', index_controller.authenticated_user);

module.exports = router;