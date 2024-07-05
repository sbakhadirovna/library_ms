const express= require('express');
const { postAuthor, getAuthors, getAuthor, patchAuthor, deleteAuthor } = require('./_controllers');
const validate = require('../../shared/middleware/validate');
const { getAuthorsSchema, patchAuthorsSchema, postAuthorsSchema } = require('./_schemas');

const router=express.Router();


router.post("/authors",validate(postAuthorsSchema),postAuthor);
router.get("/authors",validate(getAuthorsSchema) ,getAuthors);
router.get("/authors/:id",getAuthor);
router.patch("/authors/:id",validate(patchAuthorsSchema),patchAuthor);
router.delete("/authors/:id",deleteAuthor);


module.exports=router;