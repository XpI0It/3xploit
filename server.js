const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

//Static Files (CSS, Images)
app.use('/static', express.static(`${__dirname}/static`));

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
		defaultLayout: 'main',
		helpers: {
			// custom helper to use conditional css files depending on the page
			when: function (operand_1, operator, operand_2, options) {
				var operators = {
						eq: function (l, r) {
							return l == r;
						},
						noteq: function (l, r) {
							return l != r;
						},
						gt: function (l, r) {
							return Number(l) > Number(r);
						},
						or: function (l, r) {
							return l || r;
						},
						and: function (l, r) {
							return l && r;
						},
						'%': function (l, r) {
							return l % r === 0;
						}
					},
					result = operators[operator](operand_1, operand_2);

				if (result) return options.fn(this);
				else return options.inverse(this);
			}
		}
	})
);

// main routes
app.use('/', require('./routes/main'));
// Login/Register form routes
app.use('/users', require('./routes/users'));

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
