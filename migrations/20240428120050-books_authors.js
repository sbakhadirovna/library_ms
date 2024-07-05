'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('books_authors', 
    { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      bookId: {
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:'books',
          key:'id'
        }
      },
      authorId:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:'authors',
          key:'id'
        }
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue:Sequelize.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue:Sequelize.NOW,
        allowNull: false,
      }
    });
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('books_authors',{force:true});
  }
};
