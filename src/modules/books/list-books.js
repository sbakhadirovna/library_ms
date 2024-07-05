
const { Op } = require("sequelize");
const Book = require("../../db/models");
const Publisher = require("../../db/models/Publisher");
const Category = require("../../db/models/Category");

function listBooks({
  q="",
  sortBy="createdAt",
  order="DESC",
  offset=0,
  limit=20,
  ...filters

}){
  // const{yearPublished,...cleanFilters}=filters;
  // if(yearPublished){
  //   cleanFilters.yearPublished={
  //     [Op.gte]:yearPublished.from,
  //     [Op.lte]:yearPublished.to
  //   }
  // }
  return Book.findAndCountAll({
    where:{
      title:{
        [Op.iLike]:`%${q}%`,
      },
      // ...cleanFilters,
      ...filters
    },
    offset,
    limit,
    order:[
      [sortBy,order],
    ],
   include:[Publisher,Category]
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

module.exports=listBooks;