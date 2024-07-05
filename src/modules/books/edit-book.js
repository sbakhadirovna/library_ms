const Book = require("../../db/models/Book");
const Category = require("../../db/models/Category");
const Publisher = require("../../db/models/Publisher");
const { NotFoundError } = require("../../shared/errors");



function editBook(id, data) {
// const {publisherId,categoryId}=data;
// const promises=[]

// if(publisherId){
//   promises.push(Publisher.findByPk(publisherId))
// }

// if(categoryId){
//   promises.push(Category.findByPk(categoryId))
// }

// return Promise.all(promises).then((result)=>{
//   if (result.length && !result[0]) {
//     throw new NotFoundError("Publisher is not exist")
//   }else if(!result[1]){
//     throw new NotFoundError("category is not found")
//   }
// })

    return Book.findByPk(id).then((book) => {
      if (!book) {
        throw new NotFoundError("Book not found");
      }
      return Book.update(data).then((updated) => {
        return updated;
      });
    });
  }
module.exports=editBook