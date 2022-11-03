const express = require('express');
const router = express.Router();
const user = require('../schemas/UserSchema');


// GET: Login route
router.get('/login', (req, res) => {
	res.render('client/login', {
		title: 'Login',
		style: 'auth.css'
	});
});


// GET: Register route
router.get('/register', (req, res) => {
	res.render('client/register', {
		title: 'Register',
		style: 'auth.css'
	});
});

// Post method for login form
router.post('/login', async (req, res) => {
	// Accessing data from body
	var email = req.body.email;
	var password = req.body.password;

	// console.log(req.sessionID)

	try {
		user.findOne({ $and: [{ email: email }, { password: password }] }).then(
			user => {
				if (user != null) {
					var username = user.username;
					
					// create a session for user
					req.session.authenticated = true;
					req.session.user = {
						email, password, username
					}
					req.session.cookie.expires = false;
					res.redirect('/game/3xploit-modules');

				} else {
					res.render('client/login', {
						error: 'Invalid username or password',
						title: 'Login',
						style: 'auth.css'
					});
				}
			}
		);
	} catch (e) {
		console.log(e);
	}
});

// Post method for registration form
router.post('/register', async (req, res) => {
	var email = req.body.email;
	var password = req.body.password;
	var username = req.body.username;

	if (checkNullOrEmpty(email, username, password)) {
		res.render('client/register', {
			error: 'Enter all the required fields below',
			title: 'Register',
			style: 'auth.css'
		});
	} else if (
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		) == false
	) {
		res.render('client/register', {
			error: 'Entered email address is not valid',
			title: 'Register',
			style: 'auth.css'
		});
	} else if (await isUserExisting(email)) {
		res.render('client/register', {
			error: 'Email already exists !!',
			title: 'Register',

			style: 'auth.css'
		});
	} else if (await isUserNameTaken(username)) {
		res.render('client/register', {
			error: 'This username is already taken',
			title: 'Register',
			style: 'auth.css'
		});
	} else {
		var newUser = new user({
			email: email,
			username: username,
			password: password
		});

		try {
			await newUser.save().then(mssg => {
				console.log('User registered successfully');

				// creates a session for the new user
				req.session.authenticated = true;
					req.session.user = {
						email, password, username
					}
					req.session.cookie.expires = false;

				res.redirect('/game/3xploit-modules');
			});
		} catch (e) {
			console.log(e);
		}
	}
});

// checks if form data is valid or not
function checkNullOrEmpty(mail, username, password) {
	// check if data is null or empty
	var check1 = mail === '' || mail === undefined;
	var check2 = username === '' || username === undefined;
	var check3 = password === '' || password === undefined;

	if (check1 || check2 || check3) return true;
	else return false;
}

// checks if email in database already exists or not
async function isUserExisting(email) {
	return user.findOne({ email: email }).then(score => {
		if (score != null) return true;
		else return false;
	});
}

// checks if username is already taken by someone or not
async function isUserNameTaken(username) {
	return user.findOne({ username: username }).then(data => {
		if (data != null) return true;
		else return false;
	});
}

module.exports = router;
