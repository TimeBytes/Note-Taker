// importing module
const express = require("express");
const notesRoute = require("./notes");
const app = express();

// directs to notes.js
app.use("/notes", notesRoute);

// export
module.exports = app;
