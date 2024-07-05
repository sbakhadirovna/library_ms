const Book = require("../../db/models/Book");
const { NotFoundError } = require("../../shared/errors");


function removeBook(id) {
    return Book.findByPk(id).then((book)=>{
        if (!book) {
            throw new NotFoundError("Book not found");
          }
          return Book.destroy().then(() => {
            return Book;
          });
    })

}

module.exports=removeBook;