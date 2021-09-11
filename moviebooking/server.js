const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("<h1>welcome</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is listenning at ${PORT}`);
});
