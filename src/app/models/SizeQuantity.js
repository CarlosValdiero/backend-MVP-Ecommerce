module.exports = (sequelize, DataType) => {
    const SizeQuantity = sequelize.define("SizeQuantity",{
      size: DataType.STRING,
      quantity: DataType.INTEGER,
      variety_product_id: DataType.INTEGER,
    });

    SizeQuantity.associate = models => {
      SizeQuantity.belongsTo(models.VarietyProduct);
  };

    return SizeQuantity;
};