const express = require('express');
const router = express.Router();

//home
router.get('/', (req, res) => {
  if (req.session.user) {
    res.render('home/home', {
      layout: 'main',
      title: 'Home',
      username: req.session.user.username,
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
