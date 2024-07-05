const express=require("express")
const {postLogin}=require("./_controllers");
const { postLoginSchemas } = require("./_schemas");
const validate = require("../../shared/middleware/validate");
const router=express.Router();
 
router.post('/auth/login',validate(postLoginSchemas),postLogin)



module.exports=router