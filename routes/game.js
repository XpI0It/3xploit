const express = require('express');
const router = express.Router();
const score = require('../schemas/ScoreSchema');

// middleware function to check if user logged in or not
function isAuthenticated(req, res, next) {
  if (!req.session.user) {
    res.redirect('/users/register');
  } else {
    next();
  }
}

// game modules
router.get('/3xploit-modules', isAuthenticated, (req, res) => {
  res.render('game/modules', {
    layout: 'main',
    title: '3xploit Modules',
    style: 'module.css',
    session: req.session,
  });
});

// GET: starts ransomeware module
router.get('/ransomeware', isAuthenticated, (req, res) => {
  // renders appropriate question
  res.render('game/ransomeware/game', {
    layout: 'main',
    title: 'ransomeware',
    style: 'game.css',
    script: 'game.js',
    session: req.session,
  });
});

// GET: Final Score Page
router.get('/ransomeware/end', isAuthenticated, async (req, res) => {
  var receivedScore = req.query.score;
  var receivedTime = req.query.time;

  // console.log(req.session.user.username);
  var username = req.session.user.username;

  var newScoreData = new score({
    username: username,
    score: receivedScore,
    time: receivedTime,
  });

  try {
    await newScoreData.save();
    console.log('Score Saved Successfully');
    res.render('game/ransomeware/end', {
      layout: 'main',
      title: 'end',
      style: 'game.css',
      script: 'end.js',
      session: req.session,
    });
  } catch (err) {
    console.log(err);
  }
});

// GET: leaderboard
router.get('/ransomeware/highscore', isAuthenticated, (req, res) => {
  score
    .find()
    .sort({ score: -1, time: 1 })
    .exec()
    .then((data) => {
      data = data.map((value) => value.toObject());
      res.render('leaderboard/leaderboard', {
        scores: data,
        layout: 'main',
        title: 'leaderboard',
        style: 'leaderboard.css',
      });
    })
    .catch((err) => {
      res.render('leaderboard/leaderboard', { message: 'no results' });
      console.log(err);
    });
});

module.exports = router;
