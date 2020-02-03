const {Color,Product,VarietyProduct,SizeQuantity} = require('../models');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports ={

    async index(req,res){

        const {colors, types,prices,sizes} = req.query;
        let filterColors = colors?colors.split(','):[];
        let filterTypes = types?types.split(','):[];
        let filterSizes = sizes?sizes.split(','):[];
        let filterPrices = prices?prices.split(','):[];

        var variety = await VarietyProduct.findAll({
            include:[{
                attributes: ['name','description','type_id'],
                model:Product,
                where:{
                    type_id:{
                        [Op.or]: filterTypes,
                    }   
                }           
            },{
                attributes: ['name','cod'],
                model:Color
            },{
                model:SizeQuantity,
                attributes: ['size','quantity'],
                where:{
                    size:{
                        [Op.or]: filterSizes,
                    }
                }
            }],
            where:{
                color_id:{
                    [Op.or]: filterColors,
                },
                price:{
                    [Op.between]: filterPrices,
                }
                
            },
        });

        return res.json(variety);
    },


};