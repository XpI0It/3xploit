const express = require('express');
const router = express.Router();

// global variables required for storing game information
var questionIndex;
var playerScore;
var questions = [];


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
	
	buildGame();	// builds game
	questionIndex++;
	
	// renders appropriate question
	res.render('game/ransomeware', {
		layout: 'main',
		title: 'ransomeware',
		body: questions[questionIndex - 1]
	})
});

// POST: When player selects answer and submits
router.post('/submit', (req, res) => {
	// Accessing data from the form
	var option = req.body.option[0];
	option = parseInt(option);
	
	// If the answer is correct, increases player score by 10
	if(option === questions[questionIndex - 1].correctAnswer)
	{
		playerScore+=10;
	}

	// checks if there are more questions in module
	// if yes, then shows next question
	// else shows final results of the player
	if(questionIndex < questions.length){
		questionIndex++;
		res.render('game/ransomeware', {
			layout: 'main',
			title: 'ransomeware',
			score: playerScore,
			body: questions[questionIndex - 1]
		})
	}
	else{
		res.render('game/finalResult', {
			title: 'finalResult',
			layout: 'main',
			score: playerScore
		})
	}
})

// Builds the game
// Sets initial score to zero, sets up appropriate questions
function buildGame(){
	 questionIndex = 0;
	 playerScore = 0;

	 questions = [
		{
			questionTitle: 'What is 2+2 ?',
			options: [
				'2', '4', '6', '8'
			],
			correctAnswer: 1
		},
		{
			questionTitle: 'What is 3*5 ?',
			options: [
				'15', '25', '8', '10'
			],
			correctAnswer: 0
		},
		{
			questionTitle: 'What is 5*5 + 10 ?',
			options: [
				'25', '45', '65', '35'
			],
			correctAnswer: 3
		}
	]
}

module.exports = router;
