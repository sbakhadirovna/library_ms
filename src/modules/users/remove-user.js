const User = require("../../db/models/User");
const { NotFoundError } = require("../../shared/errors");



function removeUser(id) {
    return User.findByPk(id).then((user)=>{
        if (!user) {
            throw new NotFoundError("User not found");
          }
          return User.destroy().then(() => {
            return user;
          });
    })

}

module.exports = removeUser;
