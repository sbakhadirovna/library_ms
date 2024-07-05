"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "loans",
      [
        {
          dateBorrowed: new Date("2024-04-25"),
          dateReturned: new Date("2024-05-05"),
          dueDate: new Date("2024-05-02"),
          status: "Returned",
          borrowerId: 1,
          bookCopyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("loans", null, {});
  },
};
