const request = require('supertest');
const app = require('../../src/app/app');



describe('Routes', () => {

    it('create one product', async ()=>{
        const res =await request(app)
        .post('/product')
        .send({ 
            name: 'camisa',
            description:'otima qualidade' 
        })
        .expect(200);

        expect(res.body.name).toBe('camisa');
        expect(res.body.description).toBe('otima qualidade');
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
        .send({ 
            code:97653503,
	        print:"black",
	        print_color:"#000",
	        price:22.90 
        })
        .expect(200);

        expect(res.body.code).toBe(97653503);
        expect(res.body.print).toBe('black');
    });

    it('find variet_products', async ()=>{
        const res =await request(app)
        .get('/product/1/varieties')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

        expect(res.body[0].id).toBe(1);
    });

    it('update variet_products', async ()=>{

        const res =await request(app)
        .put('/product/1/variety/1')
        .send({
            code:97653503,
	        print:"green",
	        print_color:"#3c4",
	        price:45.50 
        })
        .set('Accept', 'application/json')
        .expect(200);

        expect(res.body.id).toBe(1);
        expect(res.body.print).toBe('green');
        expect(res.body.price).toBe(45.50);
    });

    it('create one size_quantity', async ()=>{
        const res =await request(app)
        .post('/product/1/variety/1/size')
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
        .get('/product/1/variety/1/sizes')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

    });

    it('update size_quantity', async ()=>{

        const res =await request(app)
        .put('/product/1/variety/1/size/1')
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

    it('response with json containing a list of all size_quantity of variety_product', async ()=>{
        const res =await request(app)
        .get('/product/1/variety/1/sizes')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

        //expect(res.body[0].id).toBe(1);
        //expect(res.body[0].size).toBe('P');
    });

});