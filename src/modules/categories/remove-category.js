const Category = require("../../db/models");
const { NotFoundError } = require("../../shared/errors");


function removeCategory(id) {
    return Category.findByPk(id).then((category)=>{
        if (!category) {
            throw new NotFoundError("Category not found");
          }
          return category.destroy().then(() => {
            return category;
          });
    })

}

module.exports=removeCategory;