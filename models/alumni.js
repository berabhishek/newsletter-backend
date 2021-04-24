module.exports = (sequelize,DataTypes) => {
    let Alumni = sequelize.define('Alumni',{
        name: DataTypes.STRING,
        designation: DataTypes.STRING,
        batch: DataTypes.STRING,
        company: DataTypes.STRING,
    }, {
        tableName: "Alumni"
    });

    return Alumni;
}