const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/productController');
const upload = require('../middleware/upload')

router.get('/', product_controller.product_list);

router.post('/', upload.array('product-image[]'), product_controller.product_create);

router.get('/:id', product_controller.product_get);

router.put('/:id', product_controller.product_put);

router.delete('/:id', product_controller.product_delete);

module.exports = router;