const express = require("express");
const app = express();
const pastesRouter = require("./pastes/pastes.router")
const usersRouter = require("./users/users.router");

// TODO: Follow instructions in the checkpoint to implement ths API.
const pastes = require("./data/pastes-data");
app.use(express.json())


app.use("/users", usersRouter);
app.use("/pastes", pastesRouter) // Note:app.use


// Not found handler
app.use((request, response, next) => {
  next(`Not found: ${request.originalUrl}`);
});

// Error handler
app.use((error, request, response, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong here!"} = error
  response.status(status).json({ error: message })
});

module.exports = app;
