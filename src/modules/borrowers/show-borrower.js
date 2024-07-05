const Borrower = require("../../db/models/Borrower");
const { NotFoundError } = require("../../shared/errors");

function showBorrower(id) {
  return Borrower.findByPk(id).then((borrower) => {
    if (!borrower) {
      throw new NotFoundError("Borrower is not found");
    }
    return borrower;
  });
}
module.exports = showBorrower;
