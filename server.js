// importing modules
const express = require("express");
const path = require("path");
const api = require("./routes/index");
// set the port for live deployement or port 3001 for localhost
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", api);

// landing page
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// live port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
