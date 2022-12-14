'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Categories = queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });

    return Categories;
  },

  down: async (queryInterface, __Sequelize) => {
    await queryInterface.dropTable('Categories');
  }
};
