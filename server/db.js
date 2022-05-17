const { DataStore } = require("notarealdb");

const store = new DataStore(`${__dirname}/data`);

module.exports = {
  users: store.collection("users"),
  donations: store.collection("donations"),
};
