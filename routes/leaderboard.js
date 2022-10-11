const express = require('express');
const router = express.Router();
const data = require("../schemas/Postgres.js");


// leaderboard

router.get('/leaderboard', (req, res) => {
	res.render('leaderboard/leaderboard', {
		layout: 'main',
		title: 'leaderboard',
		style: 'leaderboard.css',
	});

    data.getAllUserRanking().then((data) => {
        res.render("users", {userss: data});
    }).catch((err) => {
        res.render("users", {message: "no results",user:req.session.user});
    });

});

module.exports = router;
