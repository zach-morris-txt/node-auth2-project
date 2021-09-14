//Imports
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");


//Instance Of Express App
const server = express();


//Calling Middleware
server.use(helmet());
server.use(express.json());
server.use(cors());


//Consuming Routers
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);


//Error-Handling Middleware
server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});


//Exports; Exposing
module.exports = server;
