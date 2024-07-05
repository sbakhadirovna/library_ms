const Joi = require("joi");


exports.postLoanSchema={
    body:Joi.object({
        borrowerId:Joi.number().integer().required(),
        bookCopyId:Joi.number().integer().required(),
        dueDate:Joi.date().required()
    })
}