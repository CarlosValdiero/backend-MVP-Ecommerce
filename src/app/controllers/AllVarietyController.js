const {Product,VarietyProduct} = require('../models');

module.exports ={

    async index(req,res){

        var variety = await VarietyProduct.findAll({
            include:[{
                model:Product                
            }]
        });

        return res.json(variety);
    },


};