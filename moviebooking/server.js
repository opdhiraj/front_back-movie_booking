const express = require("express");
const app = express();
const PORT = 3000;
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
