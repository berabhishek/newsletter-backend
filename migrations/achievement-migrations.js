module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Achievement', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        body: {
            type: Sequelize.STRING,
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
    down: (queryInterface) => queryInterface.dropTable('Achievement'),
  };