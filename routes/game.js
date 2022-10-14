const express = require('express');
const router = express.Router();

// game modules

router.get('/3xploit-modules', (req, res) => {
	res.render('game/modules', {
		layout: 'main',
		title: '3xploit Modules',
		style: 'module.css'
	});
});


// GET: starts ransomeware module
router.get("/ransomeware", (req, res) => {
	
	// buildGame();	// builds game
	// questionIndex++;
	
	// renders appropriate question
	res.render('game/ransomeware/game', {
		layout: 'main',
		title: 'ransomeware',
		style: 'game.css',
		script: 'game.js'
	})
});


router.get('/ransomeware/end', (req, res) => {
	res.render('game/ransomeware/end', {
		layout: 'main',
		title: 'end',
		style: 'game.css',
		script: 'end.js'
	})
})

router.get('/ransomeware/highscore', (req, res) => {
	res.render('game/ransomeware/highscores', {
		layout: 'main',
		title: 'end',
		style: 'game.css',
		script: 'highscores.js'
	})
})

module.exports = router;
