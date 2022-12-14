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

async function getLastScore(username) {
  return score.findOne({ $and: [{ username: username }, { lastPlayed: true }] }).then((user) => {
    if (user != null) {
      return user.score;
    }
  });
}

// get last time taken by user

async function getLastTimeTaken(username) {
  return score.findOne({ $and: [{ username: username }, { lastPlayed: true }] }).then((user) => {
    if (user != null) {
      return user.time;
    }
  });
}

// get last module played by user

async function getLastModulePlayed(username) {
  return score.findOne({ $and: [{ username: username }, { lastPlayed: true }] }).then((user) => {
    if (user != null) {
      return user.module;
    }
  });
}

// update last played status for user
async function updateLastPlayedStatus(username, module) {
  return score
    .updateOne({ $and: [{ username: username }, { lastPlayed: true }] }, { lastPlayed: false })
    .then((data) => {
      if (data != null) {
        return true;
      }
    });
}

// game modules
router.get('/3xploit-modules', isAuthenticated, async (req, res) => {
  var userPreviousData = {
    lastScore: await getLastScore(req.session.user.username),
    lastTime: await getLastTimeTaken(req.session.user.username),
    lastModule: await getLastModulePlayed(req.session.user.username),
  };

  res.render('game/modules', {
    layout: 'main',
    title: '3xploit Modules',
    style: 'module.css',
    session: req.session,
    username: req.session.user.username,
    userPrevData: userPreviousData,
  });
});

/* ********** RANSOMEWARE ROUTES ********************************************************** */

// GET: Info for ransomeware module
router.get('/ransomeware/info', (req, res) => {
  res.render('game/ransomeware/info', {
    layout: 'main',
    title: 'Module : Ransomware',
    name: 'Ransomware',
    style: 'style.css',
    module: 'RANSOMEWARE',
  });
});

// GET: starts ransomeware module
router.get('/ransomeware', isAuthenticated, async (req, res) => {
  var userPreviousData = {
    lastScore: await getLastScore(req.session.user.username),
    lastTime: await getLastTimeTaken(req.session.user.username),
    lastModule: await getLastModulePlayed(req.session.user.username),
  };

  // renders appropriate question
  res.render('game/ransomeware/game', {
    layout: 'main',
    title: 'ransomeware',
    style: 'game.css',
    script: 'ransomewareGame.js',
    session: req.session,
    username: req.session.user.username,
    userPrevData: userPreviousData,
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
    lastModule: await getLastModulePlayed(req.session.user.username),
  };

  score
    .findOne({ $and: [{ username: username }, { module: 'Ransomeware' }] })
    .then(async (data) => {
      if (data == null) {
        var newScoreData = new score({
          username: username,
          score: receivedScore,
          time: receivedTime,
          module: 'Ransomeware',
          lastPlayed: true,
        });

        // creates new score for the user
        try {
          await updateLastPlayedStatus(username, 'Ransomeware');

          await newScoreData.save().then((mssg) => {
            console.log('Score Saved Successfully');
            res.render('game/ransomeware/end', {
              layout: 'main',
              title: 'end',
              style: 'game.css',
              script: 'end.js',
              session: req.session,
              username: req.session.user.username,
              userPrevData: userPreviousData,
            });
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        await updateLastPlayedStatus(username, 'Ransomeware');

        // updates existing score for the user
        score
          .updateOne(
            { $and: [{ username: username }, { module: 'Ransomeware' }] },
            { score: receivedScore, time: receivedTime, lastPlayed: true }
          )
          .then(async (data) => {
            if (data != null) {
              console.log('Score Updated Successfully');
              res.render('game/ransomeware/end', {
                layout: 'main',
                title: 'end',
                style: 'game.css',
                script: 'end.js',
                session: req.session,
                username: req.session.user.username,
                userPrevData: userPreviousData,
              });
            } else {
              // updates existing score for the user
              score
                .updateOne({ username: username }, { score: receivedScore })
                .then(async (data) => {
                  if (data != null) {
                    console.log('Score Updated Successfully');
                    res.render('game/ransomeware/end', {
                      layout: 'main',
                      title: 'end',
                      style: 'game.css',
                      script: 'end.js',
                      session: req.session,
                      username: req.session.user.username,
                      userPrevData: userPreviousData,
                    });
                  }
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
    lastModule: await getLastModulePlayed(req.session.user.username),
  };

  // sorts the scores first, if tie, then sorts by time taken by user
  score
    .find({ module: 'Ransomeware' })
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
        module: 'Ransomeware',
      });
    })
    .catch((err) => {
      res.render('leaderboard/leaderboard', { message: 'no results' });
    });
});

/* ********** SESSION HIJACKING ROUTES ********************************************************** */

// GET: Info for ransomeware module
router.get('/sessionhijacking/info', (req, res) => {
  res.render('game/sessionHijacking/info', {
    layout: 'main',
    title: 'Module : Session Hijacking',
    name: 'Session Hijacking',
    style: 'style.css',
    script: 'scrolldown.js',
    module: 'SESSION HIJACKING',
  });
});

// GET: starts ransomeware module
router.get('/sessionhijacking', isAuthenticated, async (req, res) => {
  var userPreviousData = {
    lastScore: await getLastScore(req.session.user.username),
    lastTime: await getLastTimeTaken(req.session.user.username),
    lastModule: await getLastModulePlayed(req.session.user.username),
  };

  // renders appropriate question
  res.render('game/sessionhijacking/game', {
    layout: 'main',
    title: 'sessionhijacking',
    style: 'game.css',
    script: 'sessionHijackingGame.js',
    session: req.session,
    username: req.session.user.username,
    userPrevData: userPreviousData,
  });
});

// GET: Final Score Page
router.get('/sessionhijacking/end', isAuthenticated, async (req, res) => {
  var receivedScore = req.query.score;
  var receivedTime = req.query.time;
  var username = req.session.user.username;

  var userPreviousData = {
    lastScore: await getLastScore(req.session.user.username),
    lastTime: await getLastTimeTaken(req.session.user.username),
    lastModule: await getLastModulePlayed(req.session.user.username),
  };

  score
    .findOne({ $and: [{ username: username }, { module: 'Session Hijacking' }] })
    .then(async (data) => {
      if (data == null) {
        var newScoreData = new score({
          username: username,
          score: receivedScore,
          time: receivedTime,
          module: 'Session Hijacking',
          lastPlayed: true,
        });

        // creates new score for the user
        try {
          await updateLastPlayedStatus(username, 'Session Hijacking');

          await newScoreData.save().then((mssg) => {
            console.log('Score Saved Successfully');
            res.render('game/sessionhijacking/end', {
              layout: 'main',
              title: 'end',
              style: 'game.css',
              script: 'end.js',
              session: req.session,
              username: req.session.user.username,
              userPrevData: userPreviousData,
            });
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        await updateLastPlayedStatus(username, 'Session Hijacking');

        // updates existing score for the user
        score
          .updateOne(
            { $and: [{ username: username }, { module: 'Session Hijacking' }] },
            { score: receivedScore, time: receivedTime, lastPlayed: true }
          )
          .then(async (data) => {
            if (data != null) {
              console.log('Score Updated Successfully');
              res.render('game/sessionhijacking/end', {
                layout: 'main',
                title: 'end',
                style: 'game.css',
                script: 'end.js',
                session: req.session,
                username: req.session.user.username,
                userPrevData: userPreviousData,
              });
            }
          });
      }
    });
});

// GET: leaderboard
router.get('/sessionhijacking/highscore', isAuthenticated, async (req, res) => {
  var userPreviousData = {
    lastScore: await getLastScore(req.session.user.username),
    lastTime: await getLastTimeTaken(req.session.user.username),
    lastModule: await getLastModulePlayed(req.session.user.username),
  };

  // sorts the scores first, if tie, then sorts by time taken by user
  score
    .find({ module: 'Session Hijacking' })
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
        module: 'Session Hijacking',
      });
    })
    .catch((err) => {
      res.render('leaderboard/leaderboard', { message: 'no results' });
    });
});

/* ********** TROJAN HORSE ROUTES ********************************************************** */

// GET: Info for ransomeware module
router.get('/trojanhorse/info', (req, res) => {
  res.render('game/trojanhorse/info', {
    layout: 'main',
    title: 'Module : Trojan Horse',
    name: 'Trojan Horse',
    style: 'style.css',
    script: 'scrolldown.js',
    module: 'TROJAN HORSE',
  });
});

// GET: starts ransomeware module
router.get('/trojanhorse', isAuthenticated, async (req, res) => {
  var userPreviousData = {
    lastScore: await getLastScore(req.session.user.username),
    lastTime: await getLastTimeTaken(req.session.user.username),
    lastModule: await getLastModulePlayed(req.session.user.username),
  };

  // renders appropriate question
  res.render('game/trojanhorse/game', {
    layout: 'main',
    title: 'trojanhorse',
    style: 'game.css',
    script: 'trojanHorseGame.js',
    session: req.session,
    username: req.session.user.username,
    userPrevData: userPreviousData,
  });
});

// GET: Final Score Page
router.get('/trojanhorse/end', isAuthenticated, async (req, res) => {
  var receivedScore = req.query.score;
  var receivedTime = req.query.time;
  var username = req.session.user.username;

  var userPreviousData = {
    lastScore: await getLastScore(req.session.user.username),
    lastTime: await getLastTimeTaken(req.session.user.username),
    lastModule: await getLastModulePlayed(req.session.user.username),
  };

  score
    .findOne({ $and: [{ username: username }, { module: 'Trojan Horse' }] })
    .then(async (data) => {
      if (data == null) {
        var newScoreData = new score({
          username: username,
          score: receivedScore,
          time: receivedTime,
          module: 'Trojan Horse',
          lastPlayed: true,
        });

        // creates new score for the user
        try {
          await updateLastPlayedStatus(username, 'Trojan Horse');

          await newScoreData.save().then((mssg) => {
            console.log('Score Saved Successfully');
            res.render('game/trojanhorse/end', {
              layout: 'main',
              title: 'end',
              style: 'game.css',
              script: 'end.js',
              session: req.session,
              username: req.session.user.username,
              userPrevData: userPreviousData,
            });
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        await updateLastPlayedStatus(username, 'Trojan Horse');

        // updates existing score for the user
        score
          .updateOne(
            { $and: [{ username: username }, { module: 'Trojan Horse' }] },
            { score: receivedScore, time: receivedTime, lastPlayed: true }
          )
          .then(async (data) => {
            if (data != null) {
              console.log('Score Updated Successfully');
              res.render('game/trojanhorse/end', {
                layout: 'main',
                title: 'end',
                style: 'game.css',
                script: 'end.js',
                session: req.session,
                username: req.session.user.username,
                userPrevData: userPreviousData,
              });
            }
          });
      }
    });
});

// GET: leaderboard
router.get('/trojanhorse/highscore', isAuthenticated, async (req, res) => {
  var userPreviousData = {
    lastScore: await getLastScore(req.session.user.username),
    lastTime: await getLastTimeTaken(req.session.user.username),
    lastModule: await getLastModulePlayed(req.session.user.username),
  };

  // sorts the scores first, if tie, then sorts by time taken by user
  score
    .find({ module: 'Trojan Horse' })
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
        module: 'Trojan Horse',
      });
    })
    .catch((err) => {
      res.render('leaderboard/leaderboard', { message: 'no results' });
    });
});

/* ********** BRUCE FORCE ATTACK ROUTES ********************************************************** */

// GET: Info for ransomeware module
router.get('/bruteforce/info', (req, res) => {
  res.render('game/bruteforce/info', {
    layout: 'main',
    title: 'Module : Brute Force Attack',
    name: 'Brute Force Attack',
    style: 'style.css',
    script: 'scrolldown.js',
    module: 'BRUTE FORCE ATTACK',
  });
});

// GET: starts ransomeware module
router.get('/bruteforce', isAuthenticated, async (req, res) => {
  var userPreviousData = {
    lastScore: await getLastScore(req.session.user.username),
    lastTime: await getLastTimeTaken(req.session.user.username),
    lastModule: await getLastModulePlayed(req.session.user.username),
  };

  // renders appropriate question
  res.render('game/bruteforce/game', {
    layout: 'main',
    title: 'bruteforce',
    style: 'game.css',
    script: 'bruteForceGame.js',
    session: req.session,
    username: req.session.user.username,
    userPrevData: userPreviousData,
  });
});

// GET: Final Score Page
router.get('/bruteforce/end', isAuthenticated, async (req, res) => {
  var receivedScore = req.query.score;
  var receivedTime = req.query.time;
  var username = req.session.user.username;

  var userPreviousData = {
    lastScore: await getLastScore(req.session.user.username),
    lastTime: await getLastTimeTaken(req.session.user.username),
    lastModule: await getLastModulePlayed(req.session.user.username),
  };

  score
    .findOne({ $and: [{ username: username }, { module: 'Brute Force Attack' }] })
    .then(async (data) => {
      if (data == null) {
        var newScoreData = new score({
          username: username,
          score: receivedScore,
          time: receivedTime,
          module: 'Brute Force Attack',
          lastPlayed: true,
        });

        // creates new score for the user
        try {
          await updateLastPlayedStatus(username, 'Brute Force Attack');

          await newScoreData.save().then((mssg) => {
            console.log('Score Saved Successfully');
            res.render('game/bruteforce/end', {
              layout: 'main',
              title: 'end',
              style: 'game.css',
              script: 'end.js',
              session: req.session,
              username: req.session.user.username,
              userPrevData: userPreviousData,
            });
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        await updateLastPlayedStatus(username, 'Brute Force Attack');

        // updates existing score for the user
        score
          .updateOne(
            { $and: [{ username: username }, { module: 'Brute Force Attack' }] },
            { score: receivedScore, time: receivedTime, lastPlayed: true }
          )
          .then(async (data) => {
            if (data != null) {
              console.log('Score Updated Successfully');
              res.render('game/bruteforce/end', {
                layout: 'main',
                title: 'end',
                style: 'game.css',
                script: 'end.js',
                session: req.session,
                username: req.session.user.username,
                userPrevData: userPreviousData,
              });
            }
          });
      }
    });
});

// GET: leaderboard
router.get('/bruteforce/highscore', isAuthenticated, async (req, res) => {
  var userPreviousData = {
    lastScore: await getLastScore(req.session.user.username),
    lastTime: await getLastTimeTaken(req.session.user.username),
    lastModule: await getLastModulePlayed(req.session.user.username),
  };

  // sorts the scores first, if tie, then sorts by time taken by user
  score
    .find({ module: 'Brute Force Attack' })
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
        module: 'Brute Force Attack',
      });
    })
    .catch((err) => {
      res.render('leaderboard/leaderboard', { message: 'no results' });
    });
});

module.exports = router;
