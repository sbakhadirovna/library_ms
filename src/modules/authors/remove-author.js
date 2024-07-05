const Author = require("../../db/models/Author");
const { NotFoundError } = require("../../shared/errors");


function removeAuthor(id) {
  return Author.findByPk(id)
      .then(author => {
          if (!author) {
              throw new NotFoundError("Author not found");
          }
          return author.destroy();
      })
      .then(() => {
          return { success: true };
      });
}

module.exports=removeAuthor;