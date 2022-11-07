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

// get last score of user
async function getLastScore(username) 
{
  return score.findOne({username: username}).then((user) => {
    if(user != null)
    {
      return user.score;
    }
  });
}

// get last time taken by user
async function getLastTimeTaken(username)
{
  return score.findOne({username: username}).then((user) => {
    if(user != null)
    {
      return user.time;
    }
  });
}

// get last module played by user
async function getLastModulePlayed(username)
{
  return score.findOne({username: username}).then((user) => {
    if(user != null)
    {
      return user.module;
    }
  });
}

// game modules
router.get('/3xploit-modules', isAuthenticated, async (req, res) => {
  
  var userPreviousData = {
    lastScore: await getLastScore(req.session.user.username),
    lastTime: await getLastTimeTaken(req.session.user.username),
    lastModule: await getLastModulePlayed(req.session.user.username)
  };

  res.render('game/modules', {
    layout: 'main',
    title: '3xploit Modules',
    style: 'module.css',
    session: req.session,
    username: req.session.user.username,
    userPrevData: userPreviousData
  });
});

// GET: starts ransomeware module
router.get('/ransomeware', isAuthenticated, async (req, res) => {
  
  var userPreviousData = {
    lastScore: await getLastScore(req.session.user.username),
    lastTime: await getLastTimeTaken(req.session.user.username),
    lastModule: await getLastModulePlayed(req.session.user.username)
  };
  
  // renders appropriate question
  res.render('game/ransomeware/game', {
    layout: 'main',
    title: 'ransomeware',
    style: 'game.css',
    script: 'game.js',
    session: req.session,
    username: req.session.user.username,
    userPrevData: userPreviousData
  });
});

// GET: Final Score Page
router.get('/ransomeware/end', isAuthenticated, async (req, res) => {
  var receivedScore = req.query.score;
  var receivedTime = req.query.time;
  var username = req.session.user.username;

  var userPreviousData = {
    lastScore: await getLastScore(req.session.user.username),
    lastTime: await getLastTimeTaken(req.session.user.username),
    lastModule: await getLastModulePlayed(req.session.user.username)
  };

  score.findOne({$and: [{ username: username }, {module: "Ransomeware"}]}).then(async (data) => {
    if (data == null) {
      var newScoreData = new score({
        username: username,
        score: receivedScore,
        time: receivedTime,
        module: "Ransomeware"
      });

      // creates new score for the user
      try {
        await newScoreData.save().then((mssg) => {
          console.log('Score Saved Successfully');
          res.render('game/ransomeware/end', {
            layout: 'main',
            title: 'end',
            style: 'game.css',
            script: 'end.js',
            session: req.session,
            username: req.session.user.username,
            userPrevData: userPreviousData
          });
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      // updates existing score for the user
      score.updateOne({ username: username }, { score: receivedScore }).then(async (data) => {
        if (data != null) {
          console.log('Score Updated Successfully');
          res.render('game/ransomeware/end', {
            layout: 'main',
            title: 'end',
            style: 'game.css',
            script: 'end.js',
            session: req.session,
            username: req.session.user.username,
            userPrevData: userPreviousData
          });
        }
      });
    }
  });
});

// GET: leaderboard
router.get('/ransomeware/highscore', isAuthenticated, async (req, res) => {
  
  var userPreviousData = {
    lastScore: await getLastScore(req.session.user.username),
    lastTime: await getLastTimeTaken(req.session.user.username),
    lastModule: await getLastModulePlayed(req.session.user.username)
  };

  // sorts the scores first, if tie, then sorts by time taken by user
  score
    .find({module: "Ransomeware"})
    .sort({ score: -1, time: 1 })
    .exec()
    .then((data) => {
      data = data.map((value) => value.toObject());
      res.render('leaderboard/leaderboard', {
        scores: data,
        layout: 'main',
        title: 'leaderboard',
        style: 'leaderboard.css',
        userPrevData: userPreviousData,
        module: "Ransomeware"
      });
    })
    .catch((err) => {
      res.render('leaderboard/leaderboard', { message: 'no results' });
    });
});

module.exports = router;
