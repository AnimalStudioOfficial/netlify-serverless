var express = require("express");
var mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

// This is for enable .env file
const dotenv = require("dotenv");
dotenv.config();

const serverless = require("serverless-http");

var indexRouter = require("./routes/index");
var flightsRouter = require("./routes/flights");

var app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/*--------------- DATABASE CONNECTION ---------------*/
try {
  // Here you must configure a .env file where specifies the database URI
  mongoose.connect("mongodb+srv://admin5473:5M89PdMLgckrbBDq@errordb.vq1j6hw.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");
} catch (error) {
  console.log(error);
}

/*--------------- Linked to routes ---------------------*/
// Default route to /
app.use("/.netlify/functions/app/", indexRouter);
// Routes to flights API
app.use("/.netlify/functions/app/flights", flightsRouter);

module.exports = app;
module.exports.handler = serverless(app);
