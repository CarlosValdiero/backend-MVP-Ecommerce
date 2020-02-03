module.exports =(sequelize, DataType)=>{

    const VarietyProduct = sequelize.define("VarietyProduct",{
        photo:DataType.STRING,
        code: DataType.INTEGER,
        price: DataType.DECIMAL(8, 2),
        available:DataType.BOOLEAN,
        product_id:DataType.INTEGER,
        color_id:DataType.INTEGER,
        photo_url: {
            type: DataType.VIRTUAL,
            get () {
              return 'http://localhost:3333/files/'+ this.getDataValue('photo') 
            }
          }
    });

    VarietyProduct.associate = models => {
        VarietyProduct.belongsTo(models.Product);
        VarietyProduct.belongsTo(models.Color);
        VarietyProduct.hasMany(models.SizeQuantity);
    };

    return VarietyProduct;
};