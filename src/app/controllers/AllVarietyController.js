const {Color,Product,VarietyProduct} = require('../models');

module.exports ={

    async index(req,res){

        var variety = await VarietyProduct.findAll({
            include:[{
                attributes: ['name','description'],
                model:Product                
            },{
                attributes: ['name','cod'],
                model:Color
            }]
        });

        return res.json(variety);
    },


};