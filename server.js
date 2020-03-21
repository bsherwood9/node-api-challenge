const express = require("express");
const cors = require("cors");
const actionRouter = require("./data/routers/actionRouter");
const pRouter = require("./data/routers/pRouter.js");
const server = express();

server.use(express.json());
server.use(cors());
server.use("/actions", actionRouter);
server.use("/projects", pRouter);
server.use(methodLogger);

module.exports = server;

function methodLogger(req, res, next) {
  const time = new Date().toISOString();
  console.log(`[${time}] --- ${req.method} = Request to ${req.url}`);
}
