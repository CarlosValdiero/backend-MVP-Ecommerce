const {Color,Product,VarietyProduct} = require('../models');

module.exports ={

    async index(req,res){
        const {product_id} = req.params;
        const product = await Product.findByPk(product_id,{
            attributes:['id'],
            include:[{
                attributes:['id'],
                model:VarietyProduct,
                include:[{
                    attributes:['id','name','cod'],
                    model:Color
                }]
            }]
        });



        let colors = product.VarietyProducts.map(variety=> variety={'name':variety.Color.name,'id':variety.Color.id,'cod':variety.Color.cod,'variety_id':variety.id});

        res.json(colors);

    }
}