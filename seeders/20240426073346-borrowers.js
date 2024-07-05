"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "borrowers",
      [
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "janedoe@gmail.com",
          username: "jane1234",
          unitNumber: 101,
          streetNumber: "123",
          addressLine1: "Main Street",
          addressLine2: "Apt 5",
          city: "Anytown",
          region: "State",
          postalCode: "12345",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("borrowers", null, {});
  },
};
