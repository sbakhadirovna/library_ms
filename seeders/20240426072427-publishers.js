'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Define the data as an array of objects
    const publishersData = [
      {
        name: 'Publisher A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Publisher B',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Use bulkInsert with the array of data
    await queryInterface.bulkInsert('publishers', publishersData, {});
  },

  async down(queryInterface, Sequelize) {
    // Use bulkDelete to remove all inserted rows
    await queryInterface.bulkDelete('publishers', null, {});
  }
};
