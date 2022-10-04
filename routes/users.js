const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
	res.render('client/login', {
		title: 'Login',
		style: 'auth.css'
	});
});

router.get('/register', (req, res) => {
	res.render('client/register', {
		title: 'Register',
		style: 'auth.css'
	});
});

module.exports = router;
