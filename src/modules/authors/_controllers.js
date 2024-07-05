const express = require("express");
const addAuthor = require("./add-author");
const listAuthors = require("./list-authors");
const showAuthor = require("./show-author");
const editAuthor = require("./edit-author");
const removeAuthor = require("./remove-author");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
function postAuthor(req, res) {
  addAuthor(req.body).then((author) => {
    res.status(201).json({ author });
  });
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

function getAuthors(req, res) {
  listAuthors({ ...req.body }).then((data) => {
    res.json(data);
  });
}
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
function getAuthor(req, res) {
  showAuthor(req.params.id)
    .then((author) => {
      res.json({ author });
    })
    .catch((err) => {
      next(err);
    });
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
// function patchAuthor(req,res){
//     editAuthor({...req.body}).then((author)=>{
//         res.status(201).json({author})
//     })
//     }

function patchAuthor(req, res, next) {
  const { id } = req.params;
  if (isNaN(parseInt(id))) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  Author.findByPk(id)
    .then((author) => {
      if (!author) {
        return res.status(404).json({ error: "Author not found" });
      }
      return editAuthor(author, req.body);
    })
    .then((updatedAuthor) => {
      res.json(updatedAuthor);
    })
    .catch((error) => {
      if (error.message.includes("Argument passed to findByPk is invalid")) {
        return res.status(400).json({ error: "Invalid author ID" });
      }
      next(error);
    });
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

// function deleteAuthor(req, res) {
//   removeAuthor(req.params.id).then((author) => {
//     res.json({ author });
//   });
// }
function deleteAuthor(req, res) {
    const { id } = req.params;
    removeAuthor(id)
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            // Handle errors, perhaps send a specific status code or error message
            res.status(500).json({ error: error.message });
        });
}

module.exports = {
  postAuthor,
  getAuthors,
  getAuthor,
  patchAuthor,
  deleteAuthor,
};
