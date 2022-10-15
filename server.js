const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const mongoose = require('mongoose');

// database
const database = (module.exports = () => {
	const connectionParameters = {
		useNewUrlParser: true,
		useUnifiedTopology: true
	};

	try {
		mongoose.connect(
			'mongodb+srv://PRJ:PRJ666@cluster0.gqgjk6y.mongodb.net/?retryWrites=true&w=majority'
		),
			connectionParameters;
		console.log('Database connection successful');
	} catch (error) {
		console.log(error);
	}
});

database();

//Static Files (CSS, Images)
app.use('/static', express.static(`${__dirname}/static`));
// scripts (JS)
app.use('/scripts', express.static(`${__dirname}/scripts`));
// resource files (JSON)
app.use('/res', express.static(`${__dirname}/res`));

// data parsing middleware
// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Handlebars middleware
app.set('view engine', '.hbs');
app.engine(
	'.hbs',
	exphbs({
		extname: '.hbs',
		defaultLayout: 'main'
	})
);

// main routes
app.use('/', require('./routes/main'));
// Login/Register form routes
app.use('/users', require('./routes/users'));
app.use('/game', require('./routes/game'));
app.use('/leaderboard', require('./routes/leaderboard'));

//err handling
app.use((req, res) => {
	res.status(404).send('<i>something broke :/</i>');
});

//port
const HTTP_PORT = process.env.PORT || 8080;
app.listen(HTTP_PORT, err => {
	if (err) console.log(err);
	else console.log(`=> Started at http://localhost:${HTTP_PORT}`);
});
