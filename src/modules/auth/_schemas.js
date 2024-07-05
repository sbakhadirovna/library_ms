const Joi = require("joi")



exports.postLoginSchemas={
    body:Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(6).required(),
    })
   
}