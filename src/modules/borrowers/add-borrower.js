const   Borrower  = require("../../db/models");

function addBorrower(data) { 
    return Borrower.create({...data})
    .then((borrower) => {
      return borrower;
    })
    .catch((err) => {
      console.log("error creating Borrower:", err);
      throw err;
    });
 
}
module.exports = addBorrower;



