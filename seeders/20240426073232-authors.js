"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "authors",
      [
        {
          name: "Agatha Christie",
          createdAt: new Date(),
        updatedAt: new Date(),
          
        },
        {
          name: "Ernest Hemingway",
          createdAt: new Date(),
        updatedAt: new Date(),
          
        },
        {
          name: "Harper Lee",
          createdAt: new Date(),
        updatedAt: new Date(),
          
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("authors", null, {});
  },
};
