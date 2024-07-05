'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('books', 
    { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false,
      },
      subTitle:{
        type: Sequelize.DataTypes.STRING(150),
        allowNull: true,
      },
      isbnNumber:{
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
        unique:true
      },
      pages:{
        type:Sequelize.DataTypes.SMALLINT,
        allowNull:false
      },
      lang:{
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false,
      },
      translated:{
        type:Sequelize.DataTypes.BOOLEAN,
        allowNull:false,
      },
      prevLang:{
        type:Sequelize.DataTypes.STRING(50),
        allowNull:true
      },
      yearPublished:{
        type:Sequelize.DataTypes.SMALLINT,
        allowNull:false
      },
      publisherId:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:"publishers",
          key:'id'
        }
      },
      categoryId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'categories', 
          key: 'id',
        },
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
    await queryInterface.dropTable('books',{force:true});
  }
};
