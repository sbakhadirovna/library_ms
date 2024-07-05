const express= require('express');
const { postBorrower, getBorrowers, getBorrower, patchBorrower, deleteBorrower } = require('./_controllers');
const validate = require('../../shared/middleware/validate');
const { getBorrowersSchema, patchBorrowersSchema, postBorrowersSchema } = require('./_schemas');

const router=express.Router();


router.post("/borrowers",validate(postBorrowersSchema),postBorrower);
router.get("/borrowers",validate(getBorrowersSchema) ,getBorrowers);
router.get("/borrowers/:id",getBorrower);
router.patch("/borrowers/:id",validate(patchBorrowersSchema),patchBorrower);
router.delete("/borrowers/:id",deleteBorrower);


module.exports=router;