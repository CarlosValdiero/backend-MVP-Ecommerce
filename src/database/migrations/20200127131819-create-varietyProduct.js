'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('variety_products',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
      },
      size:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
          isIn: [['PP', 'P','M','G','GG','GGG']], 
        }
      },
      print:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      print_color:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      price:{
        type:Sequelize.DECIMAL(8, 2),
        allowNull:true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull:true,
        references: {
          model: 'products',
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

    })
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('variety_products');
    
  }
};
