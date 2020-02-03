module.exports =(sequelize, DataType)=>{

    const Color = sequelize.define("Color",{
        name: DataType.STRING,
        cod: DataType.STRING,
    });

    Color.associate = models => {
        Color.hasMany(models.VarietyProduct);
    };

    return Color;
};