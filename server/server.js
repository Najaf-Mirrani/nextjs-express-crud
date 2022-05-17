const { graphqlExpress } = require("apollo-server-express");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const db = require("./db.js");

const port = process.env.PORT || 9000;
const app = express();

const fs = require("fs");
const typeDefs = fs.readFileSync(`${__dirname}/schema.graphql`, { encoding: "utf-8" });
const resolvers = require(`${__dirname}/resolvers.ts`);

const { makeExecutableSchema } = require("graphql-tools");
const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(cors(), bodyParser.json());

const expressPlayground = require('graphql-playground-middleware-express')
  .default
app.use("/graphql", graphqlExpress({ schema }));
app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

app.listen(port, () => console.info(`Server started on port ${port}`));
