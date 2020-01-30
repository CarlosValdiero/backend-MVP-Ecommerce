const Op = require('sequelize').Op;
const {Product, VarietyProduct, SizeQuantity} = require('../../src/app/models');

describe('Product', () => {
    it('Create one product', async ()=>{
        await Product.create({
            name:'productName',
            description:'textDescription'
        });
        const product = await Product.findAll({
            where:{
                name:'productName'
            }
        });
        expect(product[0].name).toContain('Name');
    });

    it('Update one Product', async ()=>{
        await Product.update({ name: "shoes" }, {
            where: {
              id: 1
            }
        });

        const updateProduct = await Product.findByPk(1);

        expect(updateProduct.name).toBe('shoes');

    });
    
    it('Create two product variety', async ()=>{

        const product = await Product.findAll();


        await VarietyProduct.create({
            code:4322132,
            print:'pink',
            print_color:'#926',
            price:19.90,
            product_id: product[0].id,
        });
        await VarietyProduct.create({
            code:4234234,
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

                
        expect(varietyProducts[0].code).toBe(4322132);
        expect(varietyProducts[1].code).toBe(4234234);
    });

    it('Update one product variety', async ()=>{

        await VarietyProduct.update({price:25.99},{
            where:{
                id:1
            }
        });

        const updateVariety = await VarietyProduct.findByPk(1);

        expect(updateVariety.price).toBe(25.99);

    });

    it('Create one size_quantity', async ()=>{


        const varietyProducts = await VarietyProduct.findAll();

        const sizeQuantity = await SizeQuantity.create({
            size:'P',
            quantity:10,
            variety_id: varietyProducts[0].id
        })

                
        expect(sizeQuantity.size).toBe('P');
    });

    it('Update one size_quantity', async ()=>{

        await SizeQuantity.update({quantity:15},{
            where:{
                id:1
            }
        });

        const updateSize = await SizeQuantity.findByPk(1);

        expect(updateSize.quantity).toBe(15);

    });

  });