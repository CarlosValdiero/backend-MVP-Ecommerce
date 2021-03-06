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

      code:{
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      
      photo:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      
      price:{
        type:Sequelize.DECIMAL(8, 2),
        allowNull:true,
      },
      available:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull:true,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      color_id: {
        type: Sequelize.INTEGER,
        allowNull:true,
        references: {
          model: 'colors',
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
