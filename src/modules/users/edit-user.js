const User = require("../../db/models/User");

function editUser(id, data) {
  return User.findByPk(id).then((user) => {
    if (!user) {
      throw new NotFoundError("User not found");
    }
    return User.update(data).then((updated) => {
      return updated;
    });
  });
}
module.exports = editUser;
