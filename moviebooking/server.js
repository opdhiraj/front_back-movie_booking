const express = require("express");
const dbURL = require("./config/db.config");
const app = express();
const cors = require("cors");
const PORT = 3000;

const db = require("./models");
const genreRouter = require("./routes/genre.routes");
const artistRouter = require("./routes/artist.routes");
const movieRouter = require("./routes/movie.routes");
const userRouter = require("./routes/user.routes");

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
  res.json({
    message: "Welcome to Upgrad Movie booking application development.",
  });
});

app.use("/api/genres", genreRouter);
app.use("/api/artists", artistRouter);
app.use("/api/movies", movieRouter);
app.use("/api/auth", userRouter);

app.listen(PORT, () => {
  console.log(`Server is listenning at ${PORT}`);
});
