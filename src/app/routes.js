const express = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

const ProductController = require('./controllers/ProductController');
const VarietyProductController = require('./controllers/VarietyProductController');
const SizeQuantityController = require('./controllers/SizeQuantityController');
const AllVarietyController = require('./controllers/AllVarietyController');

routes.post('/product', ProductController.store);
routes.get('/products', ProductController.index);
routes.put('/product/:product_id', ProductController.update);

routes.post('/product/:product_id/variety', upload.single('photo'),VarietyProductController.store);
routes.get('/product/:product_id/varieties', VarietyProductController.index);
routes.put('/product/:product_id/variety/:variety_id', VarietyProductController.update);

routes.get('/products/varieties', AllVarietyController.index);


routes.post('/product/:product_id/variety/:variety_product_id/size', SizeQuantityController.store);
routes.get('/product/:product_id/variety/:variety_product_id/sizes', SizeQuantityController.index);
routes.put('/product/:product_id/variety/:variety_product_id/size/:size_id', SizeQuantityController.update);

routes.get('/',(req,res)=>{
    return res.json({'test':'hello world'});
});

module.exports = routes;