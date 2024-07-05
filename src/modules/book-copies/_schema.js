const Joi = require("joi");

exports.postBookCopiesSchema={
    body:Joi.object({
        bookId:Joi.number().integer().not().empty().required()
    })
}


exports.getBookCopiesSchema={
   
    query:Joi.object({
        q:Joi.string().min(1),
        sortBy:Joi.string().valid("name","createdAt","updatedAt"),
        order:Joi.string().valid("ASC","DESC"),
        offset:Joi.number().integer().min(0),
        limit:Joi.number().integer().min(1) 
    }),
   
}