const addLoan = require("./add-loan");


function postLoan(req,res,next){
    return addLoan(req.body).then((data)=>{
        res.status(201).json(data)
    })
    .catch(next);
}

module.exports={
    postLoan
}