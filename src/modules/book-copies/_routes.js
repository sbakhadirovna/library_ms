const express=require('express');



const router=express.Router();
router.post('/book-copies') 
router.get('/book-copies/:id');
router.get('/book-copies/:id/loans')



module.exports=router;