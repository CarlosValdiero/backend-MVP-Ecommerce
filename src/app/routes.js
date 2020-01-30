const express = require("express");
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const VarietyProductController = require('./controllers/VarietyProductController');
const SizeQuantityController = require('./controllers/SizeQuantityController');

routes.post('/product', ProductController.store);
routes.get('/products', ProductController.index);

routes.post('/product/:product_id/varieties', VarietyProductController.store);

routes.get('/product/:product_id/varieties', VarietyProductController.index);


routes.post('/product/:product_id/variety/:variety_id/', SizeQuantityController.store);

routes.get('/product/:product_id/variety/:variety_id/', SizeQuantityController.index);

routes.get('/',(req,res)=>{
    return res.json({'test':'hello world'});
});

module.exports = routes;