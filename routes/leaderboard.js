const express = require('express');
const router = express.Router();
//const board = require("../schemas/BoardSchema.js");

const score = require('../schemas/test');



// leaderboard

router.get('/leaderboard', (req, res) => {
    /*
    res.render('leaderboard/leaderboard', {
		layout: 'main',
		title: 'leaderboard',
		style: 'leaderboard.css',
	});
*/




    score.find().sort({time: 1}) 
    .exec().then((data) => {
        data = data.map(value => value.toObject());
        res.render("leaderboard/leaderboard", {scores: data, layout: 'main',
		title: 'leaderboard',
		style: 'leaderboard.css',});
    }).catch((err) => {
        res.render("leaderboard/leaderboard", {message: "no results"});
    });
    /*
    data.find().then((data) => {
        res.render("leaderboard/leaderboard" , {
            layout: 'main',
		    title: 'leaderboard',
		    style: 'leaderboard.css',
        });
    }).catch((err) => {
        res.render("leaderboard/leaderboard", {
            layout: 'main',
		    title: 'leaderboard',
		    style: 'leaderboard.css',
        }, {message: "no results"});
    });
    */
});

module.exports = router;
