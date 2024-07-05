const Joi = require("joi");

exports.postBooksSchema = {
  body: Joi.object({
    title: Joi.string().trim().not().empty().required(),
    subTitle: Joi.string().trim().not().empty(),
    isbnNumber: Joi.number().integer().required(),
    pages: Joi.number().integer().positive().required(),
    lang: Joi.string().trim().not().empty().required(),
    translated: Joi.bool(),
    prevLang: Joi.string().trim().not().empty(),
    yearPublished: Joi.number().integer().positive().required(),
    publisherId: Joi.number().integer().required(),
  }),
};

exports.getBooksSchema = {
  // body
  query: Joi.object({
    q: Joi.string().min(1),
    sortBy: Joi.string().valid("title", "pages", "yearPublished"),
    order: Joi.string().valid("ASC", "DESC"),
    offset: Joi.number().integer().min(0),
    limit: Joi.number().integer().min(1),
    lang: Joi.string().trim(),
    translated: Joi.bool(),
    prevLang: Joi.string().trim(),
    yearPublished: Joi.number().integer().positive(),
    // yearPublished:Joi.object({
    //     from:Joi.number().integer().required(),
    //     to:Joi.number().integer().required()
    // })
    // ?yearPublished[from]=2014&yearPublished[to]=2024
  }),
  // params
};

exports.patchBooksSchema = {
  body: Joi.object({
    title: Joi.string().trim().not().empty().required(),
    subTitle: Joi.string().trim().not().empty(),
    isbnNumber: Joi.number().integer().required(),
    pages: Joi.number().integer().positive().required(),
    lang: Joi.string().trim().not().empty().required(),
    translated: Joi.bool(),
    prevLang: Joi.string().trim().not().empty(),
    yearPublished: Joi.number().integer().positive().required(),
  }),
};
