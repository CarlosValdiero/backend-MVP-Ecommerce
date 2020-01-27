const Op = require('sequelize').Op;
const {Product, VarietyProduct} = require('../../src/app/models');

describe('Product', () => {
    it('Create one product', async ()=>{
        await Product.create({
            name:'sadasd',
            description:'lalal'
        });
        const product = await Product.findAll();
        expect(product[0].name).toContain('sad');
    });
    
    it('Create two product variety', async ()=>{

        const product = await Product.findAll();


        await VarietyProduct.create({
            size:'P',
            print:'pink',
            print_color:'#926',
            price:19.90,
            product_id: product[0].id,
        });
        await VarietyProduct.create({
            size:'M',
            print:'blue',
            print_color:'#148',
            price:29.90,
            product_id: product[0].id,
        });

        const varietyProducts = await VarietyProduct.findAll({
            where:{
                price:{
                    [Op.between]: [10.00, 30.00],
                }
            }
        });

        expect(varietyProducts[0].size).toBe('P');
        expect(varietyProducts[1].size).toBe('M');
    })
    
  });