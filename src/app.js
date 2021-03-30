var express = require("express");
var mongoose = require("mongoose");
//var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const serverless = require("serverless-http");

var indexRouter = require("./routes/index");
var flightsRouter = require("./routes/flights");

var app = express();

//const PORT = process.env.PORT || 8000;

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, "public")));

try {
  mongoose.connect(process.env.MONGO_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");
} catch (error) {
  console.log(error);
}

app.use("/.netlify/functions/app/", indexRouter);
app.use("/.netlify/functions/app/flights", flightsRouter);

/*
app.listen(PORT, () => {
  console.log("Listening on " + PORT);
});
*/

module.exports = app;
module.exports.handler = serverless(app);