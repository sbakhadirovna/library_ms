const {Publisher}=require("../../db/models")
function addPublisher(data){
return Publisher.create(data).then((publisher)=>{
    return publisher;
})
.catch((err)=>{
    console.log("error creating publisher:", err);
})
}
module.exports=addPublisher;