const express = require("express");
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.post('/product', ProductController.store);
routes.get('/product', ProductController.index);

routes.get('/',(req,res)=>{
    return res.json({'test':'hello world'});
});

module.exports = routes;