const Publisher = require("../../db/models/Publisher");
const { NotFoundError } = require("../../shared/errors");



function showPublisher(id){
   return Publisher.findByPk(id).then((publisher)=>{
    if (!publisher) {
        throw new NotFoundError("Publisher is not found")
    }
    return publisher
   })
}
module.exports=showPublisher;