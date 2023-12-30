const express = require('express');
const router = express.Router();
const product_controller = require('../controllers/productController');

router.delete('/:id', product_controller.delete_product);

module.exports = router;
