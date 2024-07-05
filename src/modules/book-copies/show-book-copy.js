const Book = require("../../db/models/Book");
const BookCopy = require("../../db/models/BookCopy");
const Category = require("../../db/models/Category");
const Publisher = require("../../db/models/Publisher");
const { NotFoundError } = require("../../shared/errors")



function showBookCopies(id){
    return BookCopy.findByPk(id,{
        include:[
            {
                model:Book,
                include:[
                    Publisher,
                    Category,
                    {model:Author, through:{attributes:[]}},
                ]
            }
        ],
    }).then((bookCopy)=>{
        if (!bookCopy) {
            throw new NotFoundError("BookCopy not found")
        }
        return bookCopy
    })
    .catch((err)=>{
        console.log("Error showing book",err);
        throw err;
    })
}

module.exports=showBookCopies;


