const addBookCopies = require("./add-copies");
const showBookCopies = require("./show-book-copy");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
function postBookCopies(req, res, next) {
  return addBookCopies(req.body)
    .then((bookCopies) => {
      res.status(201).json({ bookCopies });
    })
    .catch(next);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
function getBookCopies(req, res, next) {
  return showBookCopies(req.params.id)
    .then((bookCopy) => {
      res.json({ bookCopy });
    })
    .catch(next);
}

module.exports = {
  postBookCopies,
  getBookCopies,
};
