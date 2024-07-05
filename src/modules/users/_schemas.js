const Joi = require("joi");



exports.postUsersSchema={
    body:Joi.object({
        firstName:Joi.string().trim().not().empty().required(),
        lastName:Joi.string().trim().not().empty().required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(6).required(),
        role:Joi.string().valid("librarian","admin").required(),
    })
}

exports.getUsersSchema={
    // body
    query:Joi.object({
        q:Joi.string().min(1),
        sortBy:Joi.string().valid("firstName","lastName","createdAt","updatedAt"),
        order:Joi.string().valid("ASC","DESC"),
        offset:Joi.number().integer().min(0),
        limit:Joi.number().integer().min(1)  
    }),
 
}

exports.patchUsersSchema={
    
    body:Joi.object({
        firstName:Joi.string().trim().not().empty(),
        lastName:Joi.string().trim().not().empty(),
        email:Joi.string().email(),
        role:Joi.string().valid("librarian","admin"),
    })
    
}