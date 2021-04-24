module.exports = (sequelize,DataTypes) => {
    let Lecture = sequelize.define('Lecture',{
        lecture: DataTypes.TEXT('100000'),
    }, {
        tableName: "Lecture"
    });

    return Lecture;
}