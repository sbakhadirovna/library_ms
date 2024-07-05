const express = require("express");
const {
  postBook,
  getBooks,
  getBook,
  patchBook,
  deleteBook,
} = require("./_controllers");
const validate = require("../../shared/middleware/validate");
const {
  getBooksSchema,
  patchBooksSchema,
  postBooksSchema,
} = require("./_schemas");

const router = express.Router();

router.post("/books", validate(postBooksSchema), postBook);
router.get("/books", validate(getBooksSchema), getBooks);
router.get("/books/:id", getBook);
router.patch(
  "/books/:id",
  validate(patchBooksSchema),
  patchBook
);
router.delete("/books/:id", deleteBook);

module.exports = router;
