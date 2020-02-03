module.exports =(sequelize, DataType)=>{

    const Type = sequelize.define("Type",{
        name: DataType.STRING,
    });

    Type.associate = models => {
        Type.hasMany(models.Product);
    };

    return Type;
};