const Borrower = require("../../db/models/Borrower");
const { NotFoundError } = require("../../shared/errors");



function removeBorrower(id) {
    return Borrower.findByPk(id).then((borrower)=>{
        if (!borrower) {
            throw new NotFoundError("Borrower not found");
          }
          return Borrower.destroy().then(() => {
            return borrower;
          });
    })

}

module.exports = removeBorrower;
