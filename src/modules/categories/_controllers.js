const express=require('express');
const addCategory = require('./add-category');
const listCategories = require('./list-categories');
const showCategory = require('./show-category');
const editCategory = require('./edit-category');
const removeCategory = require('./remove-category');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
function postCategory(req,res){
addCategory(req.body).then((category)=>{
    res.status(201).json({category})
})
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

function getCategories(req,res){
    listCategories({...req.query}).then((data)=>{
        res.json(data)
    })
}
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
function getCategory(req,res){
    showCategory(req.params.id)
        .then((category)=>{
        res.json({category})
    })
    .catch((err)=>{
        next(err);
    })
}


/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
function patchCategory(req,res){
    editCategory({...req.body}).then((category)=>{
        res.status(201).json({category})
    })
    }


/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

function deleteCategory(req,res) {
    removeCategory(req.params.id).then((category)=>{
            res.json({category})
        })
      
}

module.exports={
    postCategory,
    getCategories,
    getCategory,
    patchCategory,
    deleteCategory,
}