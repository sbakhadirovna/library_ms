const express = require("express");
const {
  postCategory,
  getCategories,
  getCategory,
  patchCategory,
  deleteCategory,
} = require("./_controllers");
const validate = require("../../shared/middleware/validate");
const {
  getCategoriesSchema,
  patchCategoriesSchema,
  postCategoriesSchema,
} = require("./_schemas");

const router = express.Router();

router.post("/categories", validate(postCategoriesSchema), postCategory);
router.get("/categories", validate(getCategoriesSchema), getCategories);
router.get("/categories/:id", getCategory);
router.patch(
  "/categories/:id",
  validate(patchCategoriesSchema),
  patchCategory
);
router.delete("/categories/:id", deleteCategory);

module.exports = router;
