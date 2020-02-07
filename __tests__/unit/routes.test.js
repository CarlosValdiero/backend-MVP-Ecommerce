const request = require('supertest');
const app = require('../../src/app/app');
const path = require('path')



describe('Routes', () => {

    

    it('create one color', async ()=>{
        const res =await request(app)
        .post('/color')
        .send({ 
            name: 'red',
            cod:'#ff0000', 
        })
        .expect(200);

        expect(res.body.name).toBe('red');
    });

    it('find colors', async ()=>{
        const res =await request(app)
        .get('/colors')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

        expect(res.body[0].id).toBe(1);
    });


    it('delete color', async ()=>{

        const res =await request(app)
        .delete('/color/2')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

        expect(res.body.ok).toBe('true');
    });

    it('create one type', async ()=>{
        const res =await request(app)
        .post('/type')
        .send({ 
            name: 'skirt', 
        })
        .expect(200);

        expect(res.body.name).toBe('skirt');
    });

    it('find types', async ()=>{
        const res =await request(app)
        .get('/types')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

        expect(res.body[0].id).toBe(1);
    });

    it('delete type', async ()=>{

        const res =await request(app)
        .delete('/type/2')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

        expect(res.body.ok).toBe('true');
    });

    it('create one product', async ()=>{
        const res =await request(app)
        .post('/product')
        .send({ 
            name: 'camisa',
            description:'otima qualidade',
            type_id:1, 
        })
        .expect(200);

        expect(res.body.name).toBe('camisa');
        expect(res.body.description).toBe('otima qualidade');
    });

    it('Search one product', async ()=>{
        const res =await request(app)
        .get('/product/1')
        .expect(200);

        expect(res.body.id).toBe(1);
    });

    it('find products', async ()=>{
        const res =await request(app)
        .get('/products')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

        expect(res.body[0].id).toBe(1);
    });

    it('update product', async ()=>{

        const res =await request(app)
        .put('/product/1')
        .send({name:'New Name', description:'new description'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

        expect(res.body.id).toBe(1);
        expect(res.body.name).toBe('New Name');
        expect(res.body.description).toBe('new description');
    });


    it('create one variet_product', async ()=>{
        const res =await request(app)
        .post('/product/1/variety')
        .field({
            'code': 97653503,
            'color_id': 1,
            'price': 22.90
        })
        .attach('photo', path.resolve(__dirname,'logo512.png'))
        .expect(200);

        expect(res.body.code).toBe('97653503');
    });

    it('create one variet_product', async ()=>{
        const res =await request(app)
        .get('/product/variety/1')
        .expect(200);

        expect(res.body.id).toBe(1);
    });

    it('find variet_products', async ()=>{
        const res =await request(app)
        .get('/product/1/varieties')
        .expect('Content-Type', /json/)
        .expect(200);

        expect(res.body[0].product_id).toBe(1);
    });


    it('update variet_products', async ()=>{

        const res =await request(app)
        .put('/product/variety/1')
        .send({
            code:97653503,
            price:45.50,
            type_id:1, 
        })
        .set('Accept', 'application/json')
        .expect(200);

        expect(res.body.id).toBe(1);
        expect(res.body.price).toBe(45.50);
    });

    it('create one size_quantity', async ()=>{
        const res =await request(app)
        .post('/product/variety/1/size')
        .send({ 
            size:'P',
	        quantity:10
        })
        .expect(200);

        expect(res.body.size).toBe('P');
        expect(res.body.quantity).toBe(10);
    });

    it('find size_quantity', async ()=>{
        const res =await request(app)
        .get('/product/variety/1/sizes')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

    });

    it('update size_quantity', async ()=>{

        const res =await request(app)
        .put('/product/variety/size/1')
        .send({
            size:'P',
	        quantity:15
        })
        .set('Accept', 'application/json')
        .expect(200);

        expect(res.body.id).toBe(1);
        expect(res.body.size).toBe('P');
        expect(res.body.quantity).toBe(15);
    });

    it('create one size_quantity 2', async ()=>{
        const res =await request(app)
        .post('/product/variety/1/size')
        .send({ 
            size:'M',
	        quantity:10
        })
        .expect(200);

        expect(res.body.size).toBe('M');
        expect(res.body.quantity).toBe(10);
    });


    it('find all variet_products', async ()=>{
        const res = await request(app)
        .get('/products/varieties')
        .query({ 
            colors: '',
            types: '',
            prices:'1,500',
            sizes:'' 
        })
        .expect('Content-Type', /json/)
        .expect(200);
        console.log(res.body);
        expect(res.body[0].id).toBe(1);
    });

    it('find all variet_products that have size M', async ()=>{
        const res = await request(app)
        .get('/products/varieties')
        .query({ 
            colors: '',
            types: '',
            prices:'1,500',
            sizes:'M'
        })
        .expect('Content-Type', /json/)
        .expect(200);
        console.log(res.body);
        expect(res.body[0].SizeQuantities[0].size).toBe('M');
    });

    it('find all colors of a product ', async ()=>{
        const res = await request(app)
        .get('/product/colors/1')
        .expect('Content-Type', /json/)
        .expect(200);
        
        expect(res.body[0].cod).toEqual(expect.stringContaining('#'));
        expect(res.body[0].variety_id).toBe(1);
    });


});