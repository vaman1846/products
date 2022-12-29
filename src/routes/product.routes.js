const router = require('express-promise-router')();
const productControoler = require('./product.controller');

router.post('/products',productControoler.createProduct);

router.get('/products',productControoler.listAllProducts);

router.get('/products/:id', productControoler.findProductById);

router.put('/products/:id', productControoler.updateProductById);

router.delete('/products/:id', productControoler.deleteProductById);

module.exports = router;