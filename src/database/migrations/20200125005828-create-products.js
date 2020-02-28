'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
        Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

		return queryInterface.createTable('products', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false
			},
			type_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					model: 'types',
					key: 'id'
				}
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false
			}
		});
	},

	down: queryInterface => {
		/*
      Example:
      return queryInterface.dropTable('users');
    */
		return queryInterface.dropTable('products');
	}
};
