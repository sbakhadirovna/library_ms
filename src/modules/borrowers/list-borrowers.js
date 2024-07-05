const { Op } = require("sequelize");
const { Borrower } = require("../../db/models");

function listBorrowers({
  q = "",
  sortBy = "createdAt",
  order = "DESC",
  offset = 0,
  limit = 5,
} = {}) {
  return Borrower.findAndCountAll({
    where: {
      [Op.or]:[
        {
          firstName: {
            [Op.iLike]: `%${q}%`,
          },
        },{
          lastName: {
            [Op.iLike]: `%${q}%`,
          },
        }
      ]
    
    },
    order: [
      [sortBy, order],
    ],
    offset,
    limit,
  }).then(({ count, rows }) => {
    return {
      data: rows,
      meta: {
        total: count,
        offset,
        limit,
      },
    };
  });
}

module.exports = listBorrowers;
