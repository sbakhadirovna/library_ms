const express=require('express')
const publisherRoutes=require('../modules/publishers/_routes')
const authorRoutes=require('../modules/authors/_routes')
const userRoutes=require('../modules/users/_routes')
const bookRoutes=require('../modules/books/_routes')
const categoryRoutes=require('../modules/categories/_routes')
const borrowerRoutes=require('../modules/borrowers/_routes')
const loanRoutes=require('../modules/loans/_routes')

const authRoutes=require("../modules/auth/_routes")




const router=express.Router();
router.use(authRoutes);
router.use(loanRoutes);
router.use(publisherRoutes);
router.use(authorRoutes);
router.use(userRoutes);
router.use(bookRoutes)
router.use(categoryRoutes)
router.use(borrowerRoutes)

module.exports=router;