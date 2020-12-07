const express = require("express");
const mongoose = require("mongoose");
const app = express();
// let cookieParser = require("cookie-parser");
// app.use(cookieParser());

const cors = require("cors");
const bodyParser = require("body-parser");

const userRoute = require("./routes/users");
const organiserRoute = require("./routes/organisers.js");

const QuestionSet = require("./models/faq");

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect(
//   "mongodb+srv://EventHub:EventHub123@cluster0.ct8lt.mongodb.net/eventHubDB?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@eventhub.fwxo5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
app.use("/api/users", userRoute);
app.use("/api/organisers", organiserRoute);
app.get("/", function (req, res) {
  // res.cookie("mycookies", "express").send("cookie set");
  // console.log(req.cookie);
});
app.get("/api/faq", (req, res) => {
  QuestionSet.find(function (err, faqContent) {
    // res.cookie("name", "geeksforgeeks");
    if (err) {
      console.log(err);
    } else {
      res.send(faqContent);
    }
  });
});
app.listen(process.env.PORT || 5000, function () {
  console.log("Server is running");
});
