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

//let newFootBall = new FootBall(det);

// newFootBall
//   .save()
//   .then(function(savedFootBall) {
//     console.log("savedBook: ", savedFootBall);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

app.post("/footballteam", function (req, res) {
    console.log(req.body);
    let newFootBallTeam = new FootBall (req.body);

    newFootBallTeam
        .save()
        .then(function (savedFootballTeam) {
            res.send(savedFootballTeam);
        })
        .catch(function (err) {
            res.status(500).send(err);
        });

});

app.get("/footballteam", function (req, res) {
    FootBall.find()
        .then(function (footballTeam) {
            if (!foootballTeam) {
                return res.send({ msg: "No Football Team Found" })
            }
            res.send(footballTeam)})
        .catch(function (err) {
            res.status(500).send(err);});
});


    app.get("/footballteam/:id", function (req, res) {
FootBall.find







app.listen(8000, () => console.log("Server running on port 8000!"));
