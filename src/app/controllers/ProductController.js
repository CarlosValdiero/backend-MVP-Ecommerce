const {Product, VarietyProduct} = require('../models');

module.exports ={
    

    async index(req,res){
        var products = await Product.findAll();
        var value={};
        var count = 0; 
        var value2 =products.map( async function(product) {
            const variety = await VarietyProduct.findAll({
                where:{
                    product_id:product.id
                }
            })
            
            value = (products[count]['variety']=variety);
            count= count+1;
            return value
        });
        console.log(value);
        console.log(value2);
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