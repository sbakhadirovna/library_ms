const { Op } = require("sequelize");
const { Publisher } = require("../../db/models");




function listPublishers({
  q="",
  sortBy="createdAt",
  order="DESC",
  offset=0,
  limit=5
}={}){
  return  Publisher.findAndCountAll({
    where:{
      name:{
        [Op.iLike]:`%${q}%`,
      },
    },
    order:[
      [sortBy,order],
    ],
    offset,
    limit,
    })
  .then(({count,rows})=>{
        return {
            data:rows,
            meta:{
                total:count,
                offset,
                limit,
            }
        }
    })
}

module.exports=listPublishers;