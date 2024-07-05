const { Op } = require("sequelize");
const { User } = require("../../db/models");

function listUsers({
  q = "",
  sortBy = "createdAt",
  order = "DESC",
  offset = 0,
  limit = 5,
} = {}) {
  return User.findAndCountAll({
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

module.exports = listUsers;
