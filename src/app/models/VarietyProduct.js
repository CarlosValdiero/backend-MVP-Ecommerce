module.exports =(sequelize, DataType)=>{

    const Product = sequelize.define("VarietyProduct",{
        size: DataType.STRING,
        print: DataType.STRING,
        print_color: DataType.STRING,
        price: DataType.DECIMAL(8, 2),
        product_id:DataType.INTEGER,
    });

    return Product;
};