module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Alumni', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        designation: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        batch: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        company: {
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
    down: (queryInterface) => queryInterface.dropTable('Alumni'),
  };