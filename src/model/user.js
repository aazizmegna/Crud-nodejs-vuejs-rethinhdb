const connection = require("../db/connection");

const type = connection.type;
// Create a model - the table is automatically created
const User = connection.createModel("User", {
  id: type.string(),
  user_name: type.string(),
  user_email: type.string(),
  user_password: type.string(),
});

module.exports = User;
