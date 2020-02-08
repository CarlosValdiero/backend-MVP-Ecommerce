# MVP backend of an E-Commerce

This project aims to develop a clothing e-commerce.
The motivation to develop this project is to improve my development with NodeJS and TDD — Test Driven Development.

### Tech

 - NodeJS
 - Express
 - Sequelize
 - Jest
 - Docker

### system idea

  - The system lists the products.

  - The User selects the product and adds it to the shopping cart.

  - The user performs a registration and / or enters the system.
 
  - Calculates the freight and makes the payment.

### Task List

-[x] Configure Sequelize, Jest and Axios.
-[x] create the necessary tables for the products.
-[x] create the models and controllers of the product and other necessary tables.
-[x] create the routes for the controllers.
-[ ] Create the necessary tables for orders, inventory control and cash control.
-[ ] create models and controllers.
-[ ] create the routes for the new controllers.
-[ ] implement APIs for calculating shipping and payment
-[ ] create User registration and authentication system

### Installation

Clone the repository with:
```
$ git clone https://github.com/CarlosValdiero/backend-ecommerce.git
```
Install all dependencies:
```
$ yarn install or npm install
```

Now it is necessary to put the database config in a .env file:
```
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
```

#### Use postgres with docker

```
$ docker container run -d --name=docker -p 5432:5432 -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=docker postgres
```
