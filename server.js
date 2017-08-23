const express = require("express");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bodyparser = require("body-parser");
const logger = require("morgan");
const FootBall = require("./models/FootBall");

const app = express();
mongoose.Promise = bluebird;
mongoose.connect("mongodb://localhost:27017/FootBall");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(logger("dev"));


let det = {

    team: "Detriot Lions",
    location: {
    state: "MI",
    city: "Detriot",
    },
    logo: "lion",
    homeColor: "Blue",
    awayColor: "White",

};

let newFootBall = new FootBall(det);

newFootBall
  .save()
  .then(function(savedFootBall) {
    console.log("savedBook: ", savedFootBall);
  })
  .catch(function(err) {
    console.log(err);
  });







app.listen(8000, () => console.log("Server running on port 8000!"));
