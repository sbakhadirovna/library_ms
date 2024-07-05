const Joi = require("joi");



exports.postBorrowersSchema={
    body:Joi.object({
        firstName:Joi.string().trim().not().empty().required(),
        lastName:Joi.string().trim().not().empty().required(),
        email:Joi.string().email().required(),
        username:Joi.string().trim().not().empty().required(),
        unitNumber: Joi.number().integer().positive().required(),
        streetNumber: Joi.string().trim().not().empty().required(),
        addressLine1:Joi.string().trim().not().empty().required(),
        addressLine2:Joi.string().trim().not().empty().required(),
        city:Joi.string().trim().not().empty().required(),
        region:Joi.string().trim().not().empty().required(),
        postalCode:Joi.string().trim().not().empty().required(),
    })
}

exports.getBorrowersSchema={
    // body
    query:Joi.object({
        q:Joi.string().min(1),
        sortBy:Joi.string().valid("firstName","lastName","createdAt","updatedAt"),
        order:Joi.string().valid("ASC","DESC"),
        offset:Joi.number().integer().min(0),
        limit:Joi.number().integer().min(1)  
    }),
 
}

exports.patchBorrowersSchema={
    
    body:Joi.object({
        firstName:Joi.string().trim().not().empty(),
        lastName:Joi.string().trim().not().empty(),
        email:Joi.string().email(),
        username:Joi.string().trim().not().empty(),
        unitNumber: Joi.number().integer().positive(),
        streetNumber: Joi.string().trim().not().empty(),
        addressLine1:Joi.string().trim().not().empty(),
        addressLine2:Joi.string().trim().not().empty(),
        city:Joi.string().trim().not().empty(),
        region:Joi.string().trim().not().empty(),
        postalCode:Joi.string().trim().not().empty(),
    })
    
}