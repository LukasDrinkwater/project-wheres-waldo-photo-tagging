const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

// Import routes
const imageRouter = require("./routes/imageRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

// Setup mongoose mongoDB connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGODB_STRING;

main().catch((error) => console.log(error));
async function main() {
  await mongoose.connect(mongoDB);
}
console.log(mongoose.connection.readyState);

// Middleware setup
app.use(logger("dev"));
app.use(express.json());
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  //cors is needed to allow requests from the React front end
  cors({
    origin: [
      "http://localhost:5173",
      "https://poetic-alfajores-d4b387.netlify.app/",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.urlencoded({ extended: false }));

// Route setup
app.use("/image", imageRouter);
app.use("/user", userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render("error");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
