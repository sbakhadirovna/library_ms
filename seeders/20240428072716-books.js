"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("books", [
      {
        title: "Pride and Prejudice",
        subTitle: "A Novel",
        isbnNumber: "9780141439518",
        pages: 279,
        lang: "English",
        translated: false,
        yearPublished: 1813,
        publisherId: 14,
        categoryId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "1984",
        subTitle: "A Novel",
        isbnNumber: "9780451524935",
        pages: 328,
        lang: "English",
        translated: false,
        yearPublished: 1949,
        publisherId: 14,
        categoryId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("books", null, {});
  },
};
