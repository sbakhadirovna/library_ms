'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    if (!(await queryInterface.describeTable('users')).createdAt) {
      await queryInterface.addColumn('users', 'createdAt', {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      });
    }
    if (!(await queryInterface.describeTable('users')).updatedAt) {
      await queryInterface.addColumn('users', 'updatedAt', {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      });
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'createdAt');
    await queryInterface.removeColumn('users', 'updatedAt');
  },
};
