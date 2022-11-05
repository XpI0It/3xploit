const express = require('express');
const router = express.Router();

//home
router.get('/', (req, res) => {
  res.render('home/home', {
    layout: 'main',
    title: 'Home',
    // custom css file for this page
    style: 'style.css',
    script: 'scrolldown.js',
  });
});

module.exports = router;
