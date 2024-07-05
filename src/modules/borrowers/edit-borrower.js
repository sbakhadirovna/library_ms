const Borrower = require("../../db/models/Borrower");

function editBorrower(id, data) {
  return Borrower.findByPk(id).then((borrower) => {
    if (!borrower) {
      throw new NotFoundError("Borrower not found");
    }
    return Borrower.update(data).then((updated) => {
      return updated;
    });
  });
}
module.exports = editBorrower;
