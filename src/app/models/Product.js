module.exports = (sequelize, DataType) => {
	const Product = sequelize.define('Product', {
		name: DataType.STRING,
		description: DataType.STRING,
		type_id: DataType.INTEGER
	});

	Product.associate = models => {
		Product.belongsTo(models.Type);
		Product.hasMany(models.VarietyProduct);
	};

	return Product;
};
