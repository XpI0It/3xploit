const express = require("express");
const router = express.Router();

//const time = require('../scripts/game');
const userscore = require('../scripts/game');


//const board = require("../schemas/BoardSchema.js");
const score = require('../schemas/test');
//


// game modules

router.get("/3xploit-modules", (req, res) => {
  res.render("game/modules", {
    layout: "main",
    title: "3xploit Modules",
    style: "module.css",
  });
});

// GET: starts ransomeware module
router.get("/ransomeware", (req, res) => {
  // buildGame();	// builds game
  // questionIndex++;

  // renders appropriate question
  res.render("game/ransomeware/game", {
    layout: "main",
    title: "ransomeware",
    style: "game.css",
    script: "game.js",
  });
});

router.get("/ransomeware/end", (req, res) => {
  res.render("game/ransomeware/end", {
    layout: "main",
    title: "end",
    style: "game.css",
    script: "end.js",
  });
});

router.get('/ransomeware/highscore', (req, res) => {

  //var findname = score.find({email: ""}, {username: true});
  score.updateOne(
    { username: "test"},
    { $set: { time:  2, score: 1}}
  ).exec();
 
  score.find().sort({time: 1}) 
  .exec().then((data) => {
      data = data.map(value => value.toObject());
      res.render("leaderboard/leaderboard", {scores: data, layout: 'main',
  title: 'leaderboard',
  style: 'leaderboard.css',});
  }).catch((err) => {
      res.render("leaderboard/leaderboard", {message: "no results"});
  });
 
});

/*
router.get("/ransomeware/highscore", (req, res) => {
  res.render("game/ransomeware/highscores", {
    layout: "main",
    title: "end",
    style: "game.css",
    script: "highscores.js",
  });
});
*/
module.exports = router;
