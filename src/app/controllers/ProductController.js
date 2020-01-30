const {Product, VarietyProduct} = require('../models');

module.exports ={
    

    async index(req,res){
        const products = await Product.findAll();

        return res.json(products)
    },

    async show(req,res){
        const {product_id} = req.params;
        const product = await Product.findByPk(product_id);

        return  res.json(product);
    },

    async store(req,res){
        const {name,description} = req.body;
        const product = await Product.create({
            name,
            description
        });

        return res.json(product);
    },

    async update(req,res){
        const {product_id} = req.params;
        const {name,description} = req.body;

        await Product.update({
            name,
            description
        },{
            where:{
                id:product_id
            }
        });

        const product = await Product.findByPk(product_id);

        return res.json(product);
    }

};