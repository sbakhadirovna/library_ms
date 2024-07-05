const Author = require("../../db/models/Author");
const { NotFoundError } = require("../../shared/errors");



function showAuthor(id){
   return Author.findByPk(id).then((author)=>{
    if (!author) {
        throw new NotFoundError("Author is not found")
    }
    return author
   })
}
module.exports=showAuthor;