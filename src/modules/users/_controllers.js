const express = require("express");
const addUser = require("./add-user");
const listUsers = require("./list-users");
const showUser = require("./show-user");
const editUser = require("./edit-user");
const removeUser = require("./remove-user");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
function postUser(req, res) {
  addUser(req.body).then((user) => {
    res.status(201).json({ user });
  });
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

function getUsers(req, res) {
  listUsers({ ...req.body }).then((data) => {
    res.json(data);
  });
}
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
function getUser(req, res) {
  showUser(req.params.id)
    .then((user) => {
      res.json({ user });
    })
    .catch((err) => {
      next(err);
    });
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
function patchUser(req, res) {
  editUser({ ...req.body }).then((user) => {
    res.status(201).json({ user });
  });
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

function deleteUser(req, res) {
  removeUser(req.params.id).then((user) => {
    res.json({ user });
  });
}

module.exports = {
  postUser,
  getUsers,
  getUser,
  patchUser,
  deleteUser,
};
