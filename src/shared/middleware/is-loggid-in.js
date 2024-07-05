/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const config = require("../config");
const { UnauthorizedError } = require("../errors");

function isLoggidIn(req,res,next){
    const token=req.headers.authorization;
    if(!token){
        next(new UnauthorizedError("Unauthorized"))
        return
    }
    try{
        const payload=jwt.verify(token,config.jwt.secret,{
            ignoreExpiration:false,
        })
        req.user=payload.user
        next();
    }catch(error){
        next(new UnauthorizedError("Unauthorized"))
    }
}

module.exports=isLoggidIn;