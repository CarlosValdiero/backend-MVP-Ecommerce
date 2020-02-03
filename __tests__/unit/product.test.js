const Op = require('sequelize').Op;
const {Type,Color,Product, VarietyProduct, SizeQuantity} = require('../../src/app/models');


describe('Type', () => {
    it('Create one type', async ()=>{
        await Type.create({
            name:'pan',
        });

        const type = await Type.findAll({
            where:{
                name:'pan'
            }
        });
        expect(type[0].name).toBe('pan');
    });

    it('Update one Type', async ()=>{
        await Type.update({ name: "shorts" }, {
            where: {
              id: 1
            }
        });

        const updateType = await Type.findByPk(1);

        expect(updateType.name).toBe('shorts');

    });
    
});

describe('Color', () => {
    it('Create one Color', async ()=>{
        await Color.create({
            name:'red',
            cod:'#FF0000'
        });

        const color = await Color.findAll({
            where:{
                name:'red'
            }
        });
        expect(color[0].cod).toBe('#FF0000');
    });

    it('Update one Product', async ()=>{
        await Color.update({ name: "green",cod:'#00FF00' }, {
            where: {
              id: 1
            }
        });

        const updateColor = await Color.findByPk(1);

        expect(updateColor.name).toBe('green');

    });
    
});

describe('Product', () => {
    it('Create one product', async ()=>{
        await Product.create({
            name:'productName',
            description:'textDescription',
            type_id:1,
        });
        const product = await Product.findAll({
            where:{
                name:'productName'
            }
        });
        expect(product[0].type_id).toBe(1);
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


        await VarietyProduct.create({
            photo:'photo.png',
            code:4322132,
            price:19.90,
            product_id: 1,
            color_id:1,
        });
        await VarietyProduct.create({
            photo:"photo2.png",
            code:4234234,
            price:29.90,
            product_id: 1,
            color_id:1,
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