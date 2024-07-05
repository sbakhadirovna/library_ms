const Joi = require("joi");

exports.postCategoriesSchema = {
  body: Joi.object({
    name: Joi.string().trim().not().empty().required(),
    parentId: Joi.number().integer(),
  }),
};

exports.getCategoriesSchema = {
  // body
  query: Joi.object({
    q: Joi.string().min(1),
    sortBy: Joi.string().valid("name"),
    order: Joi.string().valid("ASC", "DESC"),
    offset: Joi.number().integer().min(0),
    limit: Joi.number().integer().min(1),
  }),
  // params
};

exports.patchCategoriesSchema = {
  body: Joi.object({
    name: Joi.string().trim().not().empty().required(),
    parentId: Joi.number().integer(),
  }),
};
