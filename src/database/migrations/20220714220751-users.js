'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Users = queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      displayName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    })

    return Users;
  },

  down: async (queryInterface, __Sequelize) => {
    await queryInterface.dropTable('Users')
  }
};
