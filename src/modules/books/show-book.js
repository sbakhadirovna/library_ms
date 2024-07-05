const { Sequelize } = require("sequelize");
const Author = require("../../db/models/Author");
const Category = require("../../db/models/Category");
const Publisher = require("../../db/models/Publisher");
const { NotFoundError } = require("../../shared/errors");
const BookCopy = require("../../db/models/BookCopy");

function showBook(id) {
  return Book.findByPk(id, {
    attributes: ["book.*", [Sequelize.fn("COUNT", "nookCopies.id"), "copies"]],
    group: ["book.id"],
    include: [{ model: BookCopy, attributes: [] }],
    // include:[
    //     Publisher,
    //     Category,
    //     {
    //         model:Author,
    //         through:{attributes:[]},
    //     },
  }).then((book) => {
    if (!book) {
      throw new NotFoundError("Book is not found");
    }
    return book;
  });
}

module.exports = showBook;
