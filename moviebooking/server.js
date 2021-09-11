const express = require("express");
const dbURL = require("./config/db.config");
const app = express();
const PORT = 3000;

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.send("<h1>welcome</h1>");
});
app.get("/movies", (req, res) => {
  res.send("All Movies Data in JSON format from Mongo DB");
  r;
});
app.get("/genres", (req, res) => {
  res.send("All Genres Data in JSON format from Mongo DB");
});
app.get("/artists", (req, res) => {
  res.send("All Artists Data in JSON format from Mongo DB");
});

app.listen(PORT, () => {
  console.log(`Server is listenning at ${PORT}`);
});
