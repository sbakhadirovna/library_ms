const express= require('express');
const { postUser, getUsers, getUser, patchUser, deleteUser } = require('./_controllers');
const validate = require('../../shared/middleware/validate');
const { getUsersSchema, patchUsersSchema, postUsersSchema } = require('./_schemas');

const router=express.Router();


router.post("/users",validate(postUsersSchema),postUser);
router.get("/users",validate(getUsersSchema) ,getUsers);
router.get("/users/:id",getUser);
router.patch("/users/:id",validate(patchUsersSchema),patchUser);
router.delete("/users/:id",deleteUser);


module.exports=router;