const express = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

const ProductController = require('./controllers/ProductController');
const VarietyProductController = require('./controllers/VarietyProductController');
const SizeQuantityController = require('./controllers/SizeQuantityController');
const AllVarietyController = require('./controllers/AllVarietyController');
const TypeController = require('./controllers/TypeController');
const ColorController = require('./controllers/ColorController');

routes.post('/type', TypeController.store);
routes.get('/types', TypeController.index);
routes.delete('/type/:type_id', TypeController.delete);

routes.post('/color', ColorController.store);
routes.get('/colors', ColorController.index);
routes.delete('/color/:color_id', ColorController.delete);

routes.post('/product', ProductController.store);
routes.get('/products', ProductController.index);
routes.put('/product/:product_id', ProductController.update);

routes.post('/product/:product_id/variety', upload.single('photo'),VarietyProductController.store);
routes.get('/product/:product_id/varieties', VarietyProductController.index);
routes.put('/product/:product_id/variety/:variety_id', VarietyProductController.update);

routes.get('/products/varieties', AllVarietyController.index);

routes.post('/product/variety/:variety_product_id/size', SizeQuantityController.store);
routes.get('/product/variety/:variety_product_id/sizes', SizeQuantityController.index);
routes.put('/product/variety/:variety_product_id/size/:size_id', SizeQuantityController.update);


module.exports = routes;