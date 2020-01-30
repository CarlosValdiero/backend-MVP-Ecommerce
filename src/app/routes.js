const express = require("express");
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const VarietyProductController = require('./controllers/VarietyProductController');
const SizeQuantityController = require('./controllers/SizeQuantityController');

routes.post('/product', ProductController.store);
routes.get('/products', ProductController.index);
routes.put('/product/:product_id', ProductController.update);

routes.post('/product/:product_id/variety', VarietyProductController.store);
routes.get('/product/:product_id/varieties', VarietyProductController.index);
routes.put('/product/:product_id/variety/:variety_id', VarietyProductController.update);

routes.post('/product/:product_id/variety/:variety_id/size', SizeQuantityController.store);
routes.get('/product/:product_id/variety/:variety_id/sizes', SizeQuantityController.index);
routes.put('/product/:product_id/variety/:variety_id/size/:size_id', SizeQuantityController.update);

routes.get('/',(req,res)=>{
    return res.json({'test':'hello world'});
});

module.exports = routes;