const Author = require("../../db/models/Author");
const { NotFoundError } = require("../../shared/errors");



function editAuthor(id, data) {
    return Author.findByPk(id).then((author) => {
      if (!author) {
        throw new NotFoundError("Author not found");
      }
      return Author.update(data).then((updated) => {
        return updated;
      });
    });
  }
module.exports=editAuthor