module.exports =(sequelize, DataType)=>{

    const Product = sequelize.define("Product",{
        name: DataType.STRING,
        description: DataType.STRING,
    });

    return Product;
};