'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('size_quantities', {
        id: {
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull:false,
        },
        quantity:{
          type:Sequelize.INTEGER,
          allowNull:true,
        },
        size:{
          type:Sequelize.STRING,
          allowNull:false,
          validate:{
            isIn: [['PP', 'P','M','G','GG','GGG']], 
          }
        },
        variety_product_id: {
          type: Sequelize.INTEGER,
          allowNull:true,
          references: {
            model: 'variety_products',
            key: 'id'
          }
        },
        created_at:{
          type:Sequelize.DATE,
          allowNull:false
        },
        updated_at:{
          type:Sequelize.DATE,
          allowNull:false
        }
        
      });
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('size_quantities');
    
  }
};
