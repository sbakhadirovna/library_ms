const express=require('express');
const { postLoan } = require('./_controllers');
const validate = require('../../shared/middleware/validate');
const isLoggidIn = require('../../shared/middleware/is-loggid-in');
const { postLoanSchema } = require('./_schema');





const router=express.Router();
router.post('/loans',validate(postLoanSchema),postLoan) 
router.get('/loans');
router.post('/loans/:id/return')

module.exports=router;