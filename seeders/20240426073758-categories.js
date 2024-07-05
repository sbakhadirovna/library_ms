"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Science & Nature ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fiction",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cooking, Food & Wine",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Travel & Adventure",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
