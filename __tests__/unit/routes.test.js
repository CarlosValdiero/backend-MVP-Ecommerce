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

    it('create one variet_product', async ()=>{
        const res =await request(app)
        .post('/product/1/varieties')
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

    

    it('response with json containing a list of all size_quantity of variety_product', async ()=>{
        const res =await request(app)
        .get('/product/1/variety/1/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

        //expect(res.body[0].id).toBe(1);
        //expect(res.body[0].size).toBe('P');
    });

});