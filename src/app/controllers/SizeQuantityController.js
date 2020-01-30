const {SizeQuantity} = require('../models');

module.exports ={

    async index(req,res){
        const {variety_id} = req.params;

        var sizes = await SizeQuantity.findAll({
            where: {
                variety_id
            }
        });

        return res.json(sizes);
    },

    async store(req,res){
        const {size,quantity} = req.body;
        const {variety_id} = req.params;
        const variety = await SizeQuantity.create({
            size,
            quantity,
            variety_id
        });

        return res.json(variety);
    }

};