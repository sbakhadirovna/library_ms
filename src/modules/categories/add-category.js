const Category = require("../../db/models/Category");
const { NotFoundError, BadRequestError } = require("../../shared/errors");

function addCategory(data) {
    if ( parentId ) {
        return Category.findByPk(parentId).then((category)=>{
            if(!category){
                throw new BadRequestError("Parent category is not found")
            }
            return Category.create(data)
            .then((category)=>{
                return category
            })
            .catch((err)=>{
                console.log("Error creating category:",err);
            })
        })
    }
    
        return Category.create(data)
            .then((category) => {
                return category;
            })
            .catch((err) => {
                console.log("Error creating category: ", err);
                throw err;
            });
   
}

module.exports = addCategory;
