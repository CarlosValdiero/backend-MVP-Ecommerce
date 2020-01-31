module.exports =(sequelize, DataType)=>{

    const Product = sequelize.define("Product",{
        name: DataType.STRING,
        description: DataType.STRING,
    });

    Product.associate = models => {
        Product.hasMany(models.VarietyProduct);
    };

    return Product;
};