module.exports =(sequelize, DataType)=>{

    const Product = sequelize.define("VarietyProduct",{
        code: DataType.INTEGER,
        print: DataType.STRING,
        print_color: DataType.STRING,
        price: DataType.DECIMAL(8, 2),
        available:DataType.BOOLEAN,
        product_id:DataType.INTEGER,
    });

    return Product;
};