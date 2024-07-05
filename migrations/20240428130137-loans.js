'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('loans', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      dateBorrowed: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      dateReturned: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      dueDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.DataTypes.ENUM("loaned","pending","closed"),
        defaultValue:"loaned",
        allowNull: false,
      },
      borrowerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'borrowers', 
          key: 'id',
        },
      },
      bookCopyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'book_copies', 
          key: 'id',
        },
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
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('loans',{force:true});
  }
};
