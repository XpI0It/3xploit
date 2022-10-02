//for cross origin resource sharing
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

//express app
const app = express();

//middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

//routes
// get home
app.get('/', (req, res) => {
	res.send('Hello World!');
});

//port
const HTTP_PORT = process.env.PORT || 8080;
app.listen(HTTP_PORT, err => {
	if (err) console.log(err);
	else console.log(`=> Started at http://localhost:${HTTP_PORT}`);
});
