const Publisher = require("../../db/models/Publisher");
const { NotFoundError } = require("../../shared/errors");

function editPublisher(id, data) {
  return Publisher.findByPk(id).then((publisher) => {
    if (!publisher) {
      throw new NotFoundError("Publisher not found");
    }
    return publisher.update(data).then((updated) => {
      return updated;
    });
  });
}
module.exports = editPublisher;
