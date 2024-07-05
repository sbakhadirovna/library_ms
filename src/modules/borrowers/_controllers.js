const express = require("express");
const addBorrower = require("./add-borrower");
const listBorrowers = require("./list-borrowers");
const showBorrower = require("./show-borrower");
const editBorrower = require("./edit-borrower");
const removeBorrower = require("./remove-borrower");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
function postBorrower(req, res,next) {
  return addBorrower(req.body).then((borrower) => {
    res.status(201).json({ borrower });
  })
  .catch(next)
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

function getBorrowers(req, res) {
 return listBorrowers({ ...req.body }).then((data) => {
    res.json(data);
  });
}
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
function getBorrower(req, res) {
 return showBorrower(req.params.id)
    .then((borrower) => {
      res.json({ borrower });
    })
    .catch((err) => {
      next(err);
    });
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
function patchBorrower(req, res) {
 return editBorrower({ ...req.body }).then((borrower) => {
    res.status(201).json({ borrower });
  });
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

function deleteBorrower(req, res) {
 return removeBorrower(req.params.id).then((borrower) => {
    res.json({ borrower });
  });
}

module.exports = {
  postBorrower,
  getBorrowers,
  getBorrower,
  patchBorrower,
  deleteBorrower,
};
