const {VarietyProduct} = require('../models');

module.exports ={

    async index(req,res){
        const {product_id} = req.params;

        var variety = await VarietyProduct.findAll({
            where:{
                product_id
            }
        });

        return res.json(variety);
    },

    async store(req,res){
        const {code,print, print_color, price} = req.body;
        const {product_id} = req.params;
        const variety = await VarietyProduct.create({
            code,
            print,
            print_color,
            price,
            product_id
        });

        return res.json(variety);
    },

    async update(req,res){
        const {variety_id} = req.params;
        const {code,print, print_color, price} = req.body;

        await VarietyProduct.update({
            code,
            print,
            print_color,
            price,
        },{
            where:{
                id:variety_id
            }
        });

        const variety = await VarietyProduct.findByPk(variety_id);
        
        return res.json(variety);
    }

};