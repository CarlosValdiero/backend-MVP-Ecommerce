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
    },

    async update(req,res){
        const {size_id} = req.params;
        const {size,quantity} = req.body;

        await SizeQuantity.update({
            size,
            quantity,
        },{
            where:{
                id:size_id
            }
        });

        const sizeQuantity = await SizeQuantity.findByPk(size_id);
        
        return res.json(sizeQuantity);
    }


};