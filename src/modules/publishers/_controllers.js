const express=require('express');
const addPublisher = require('./add-publisher');
const listPublishers = require('./list-publishers');
const showPublisher = require('./show-publisher');
const editPublisher = require('./edit-publisher');
const removePublisher = require('./remove-publisher');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
function postPublisher(req,res){
addPublisher(req.body).then((publisher)=>{
    res.status(201).json({publisher})
})
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

function getPublishers(req,res){
    listPublishers({...req.body}).then((data)=>{
        res.json(data)
    })
}
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
function getPublisher(req,res){
    showPublisher(req.params.id)
        .then((publisher)=>{
        res.json({publisher})
    })
    .catch((err)=>{
        next(err);
    })
}


/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
function patchPublisher(req,res){
    editPublisher({...req.body}).then((publisher)=>{
        res.status(201).json({publisher})
    })
    }


/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

function deletePublisher(req,res) {
    removePublisher(req.params.id).then((publisher)=>{
            res.json({publisher})
        })
      
}

module.exports={
    postPublisher,
    getPublishers,
    getPublisher,
    patchPublisher,
    deletePublisher,
}