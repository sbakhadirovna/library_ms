const Book = require("../../db/models/Book")
const BookCopy = require("../../db/models/BookCopy")
const { BadRequestError } = require("../../shared/errors")



function addBookCopies(data){
    const{bookId,...rest}=data
    return Book.findByPk(bookId)
    .then((book=>{
        if(!book){
            throw new BadRequestError("book not found")
        }
        return BookCopy.create(...rest)
        .then((bookCopy)=>{
            return bookCopy
        }) 
    }))
    .catch((err)=>{
        console.log("Error creating book copies:", err);
        throw err;
    })
    
}

module.exports=addBookCopies;


