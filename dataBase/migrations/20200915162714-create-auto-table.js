const {DataTypes} = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('auto', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Audi'
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
  },

  down: async (queryInterface, Sequelize) => {
      await  queryInterface.dropTable('auto')
  }
};
