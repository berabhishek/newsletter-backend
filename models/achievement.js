module.exports = (sequelize,DataTypes) => {
    let Achievement = sequelize.define('Achievement',{
        image: DataTypes.STRING,
        body : DataTypes.STRING,
    }, {
        tableName: "Achievement"
    });

    return Achievement;
}