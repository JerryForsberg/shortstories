
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
// get driver connection
const dbo = require("./db/conn");
const { ApolloServer } = require('apollo-server-express')
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-yb9x3llp.us.auth0.com/.well-known/jwks.json'
}),
audience: 'https://short-stories-api',
issuer: 'https://dev-yb9x3llp.us.auth0.com/',
algorithms: ['RS256']
});


const typeDefs = require('./lib/graphqlSchema');
const resolvers = require('./lib/resolvers');

app.use(jwtCheck);

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context: async () => {
    
  },
});

const start = async () => {
  await server.start().then(() => { server.applyMiddleware({ app }) })

  app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`);
  });
}

start();
