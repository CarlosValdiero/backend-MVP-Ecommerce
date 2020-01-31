module.exports =(sequelize, DataType)=>{

    const VarietyProduct = sequelize.define("VarietyProduct",{
        code: DataType.INTEGER,
        print: DataType.STRING,
        print_color: DataType.STRING,
        price: DataType.DECIMAL(8, 2),
        available:DataType.BOOLEAN,
        product_id:DataType.INTEGER,
    });

    VarietyProduct.associate = models => {
        VarietyProduct.belongsTo(models.Product);
        VarietyProduct.hasMany(models.SizeQuantity);
    };

    return VarietyProduct;
};