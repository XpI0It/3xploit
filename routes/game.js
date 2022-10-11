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

module.exports = router;