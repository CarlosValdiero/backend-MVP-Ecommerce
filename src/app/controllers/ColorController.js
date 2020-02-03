const {Color} = require('../models');

module.exports ={
    

    async index(req,res){
        const colors = await Color.findAll();

        return res.json(colors)
    },

    async store(req,res){
        const {name,cod} = req.body;
        const color = await Color.create({
            name,
            cod
        });

        return res.json(color);
    },

    async delete(req,res){
        const {color_id} = req.params;

        await Color.destroy({
            where:{
                id:color_id
            }
        });

        return res.json({ok:'true'});
    }

};