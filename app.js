const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
require("dotenv").config();
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api", require("./routes/api.route"));
app.use(express.static(path.join(__dirname, "client/build")));
app.get("/*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "client", "build", "index.html"),
    (err) => {
      console.log(err);
    }
  );
});

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
