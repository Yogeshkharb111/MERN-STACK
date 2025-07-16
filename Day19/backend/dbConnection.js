const { MongoClient } = require("mongodb");

// ✅ Use the connection URL here
let dbConnectionUrl = "mongodb://127.0.0.1:27017";
const client = new MongoClient(dbConnectionUrl);

let dbConnection = async () => {
  await client.connect();
  let db = client.db("firstDatabase1");
  return db;
};

module.exports = { dbConnection };
