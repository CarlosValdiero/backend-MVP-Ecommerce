const {Product} = require('../models');

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
        const {name,description,type_id} = req.body;
        const product = await Product.create({
            name,
            description,
            type_id
        });

        return res.json(product);
    },

    async update(req,res){
        const {product_id} = req.params;
        const {name,description,type_id} = req.body;

        await Product.update({
            name,
            description,
            type_id
        },{
            where:{
                id:product_id
            }
        });

        const product = await Product.findByPk(product_id);

        return res.json(product);
    }

};