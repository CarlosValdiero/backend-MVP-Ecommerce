const {Product} = require('../models');

module.exports ={

    async index(req,res){
        console.log(Product);
        const products = await Product.findAll();
        
        return res.json(products);
    },

    async store(req,res){
        const {name,description} = req.body;
        const product = await Product.create({
            name,
            description
        });

        return res.json(product);
    }

};