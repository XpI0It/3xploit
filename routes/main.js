const express = require('express');
const router = express.Router();
const score = require('../schemas/ScoreSchema');

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

// // update last played status for user
// async function updateLastPlayedStatus(username, module)
// {
//   return score.updateOne({$and: [{username: username}, {lastPlayed: true}]}, {lastPlayed: false})
//               .then((data) => {
//                 if(data != null)
//                 {
//                   return true;
//                 }
//               })
// }

//home
router.get('/', async (req, res) => {
  if (req.session.user) {
    var userPreviousData = {
      lastScore: await getLastScore(req.session.user.username),
      lastTime: await getLastTimeTaken(req.session.user.username),
      lastModule: await getLastModulePlayed(req.session.user.username),
    };

    res.render('home/home', {
      layout: 'main',
      title: 'Home',
      username: req.session.user.username,
      userPrevData: userPreviousData,
      // custom css file for this page
      style: 'style.css',
      script: 'scrolldown.js',
    });
  } else {
    res.render('home/home', {
      layout: 'main',
      title: 'Home',
      // custom css file for this page
      style: 'style.css',
      script: 'scrolldown.js',
    });
  }
});

module.exports = router;
