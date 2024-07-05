const { Op } = require("sequelize");
const Book = require("../../db/models/Book");
const Publisher = require("../../db/models/Publisher");
const { BadRequestError } = require("../../shared/errors");
const Category = require("../../db/models/Category");
const Author = require("../../db/models/Author");
const BookCopy = require("../../db/models/BookCopy");

function addBook(data) {
  const { publisherId, categoryId, authorId, ...rest } = data;
  return Publisher.findByPk(publisherId).then((publisher) => {
    if (!publisher) {
      throw new BadRequestError("Publisher is not found");
    }
    return Category.findByPk(categoryId).then((category) => {
      if (!category) {
        throw new BadRequestError("category is not found");
      }
      return Author.findAll({ where: { id: { [Op.in]: authorIds } } }).then(
        (authors) => {
          if (authors.length !== authorIds.length) {
            throw new BadRequestError("Some authors do not exist");
          }
          return Book.create({ ...rest, publisherId, categoryId })
            .then((book) => {
              return book.addAuthors(authors).then(() => {
                BookCopy.bulkCreate(
                  new Array(countOfCopies).fill({ bookId: book.id })
                ).then(() => {
                  return book;
                });
              });
            })
            .catch((err) => {
              console.log("Error creating book: ", err);
              throw err;
            });
        }
      );
    });
  });
}

module.exports = addBook;
