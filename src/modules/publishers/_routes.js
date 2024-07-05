const express = require("express");
const {
  postPublisher,
  getPublishers,
  getPublisher,
  patchPublisher,
  deletePublisher,
} = require("./_controllers");
const validate = require("../../shared/middleware/validate");
const {
  getPublishersSchema,
  patchPublishersSchema,
  postPublishersSchema,
} = require("./_schemas");
const isLoggidIn = require("../../shared/middleware/is-loggid-in");

const router = express.Router();

router.post("/publishers",isLoggidIn, validate(postPublishersSchema), postPublisher);
router.get("/publishers",isLoggidIn, validate(getPublishersSchema), getPublishers);
router.get("/publishers/:id",isLoggidIn, getPublisher);
router.patch(
  "/publishers/:id",
  isLoggidIn,
  validate(patchPublishersSchema),
  patchPublisher
);
router.delete("/publishers/:id", deletePublisher);

module.exports = router;
