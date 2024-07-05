'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('authors', 
    {  
      id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING(150),
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue:Sequelize.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue:Sequelize.NOW,
      allowNull: false,
    }
  },
 )
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('authors' ,{force:true});
  }
};
