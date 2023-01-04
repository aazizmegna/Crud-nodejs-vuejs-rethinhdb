const r = require("rethinkdb");
const connection = require("thinky")({
  host: "localhost", // RethinkDB host
  port: 28015,
  authKey: "", // RethinkDB driver port
  db: "qdisco", // Database that we are going to use
});

module.exports = connection;
