module.exports = (sequelize, DataType) => {
    const Product = sequelize.define("SizeQuantity",{
      size: DataType.STRING,
      quantity: DataType.INTEGER,
      variety_id: DataType.INTEGER,
    });

    return Product;
};