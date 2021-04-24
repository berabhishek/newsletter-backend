module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Lecture', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        lecture: {
          type: Sequelize.TEXT('100000'),
          allowNull: true,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }),
    down: (queryInterface) => queryInterface.dropTable('Lecture'),
  };