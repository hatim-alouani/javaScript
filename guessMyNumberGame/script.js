'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector(".message").textContent = "Correct Number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;

const random = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let reset = function(){
	const random = Math.floor(Math.random() * 20) + 1;
	score = 20;
	document.querySelector('.score').textContent = score;
	document.querySelector('.message').textContent = 'Start guessing...';
	document.querySelector('.guess').value = '';
	document.querySelector('.number').textContent = '?';
}

const x = function() {
	const guess = Number(document.querySelector('.guess').value);
	// console.log(guess, typeof guess);
	if (!guess){
		document.querySelector('.message').textContent = 'No number';
	}
	else {
		if (guess > random){
			document.querySelector('.message').textContent = 'Too hight';
			if (score > 0)
				score--;
			document.querySelector('.score').textContent = score;
		}
		else if (guess < random){
			document.querySelector('.message').textContent = 'Too down';
			if (score > 0)
				score--;
			document.querySelector('.score').textContent = score;
		}
		else {
			document.querySelector('.message').textContent = 'Correct Number';
			if (score > highScore)
				highScore = score;
			document.querySelector('.highscore').textContent = highScore;
			document.querySelector('.number').textContent = guess;
			// document.querySelector('body').style.backgroundColor = '#60b347';
			// document.querySelector('.number').style.width = '3rem';
		}
		if (score <= 0){
			document.querySelector('.message').textContent = 'You lost the game';
		}
	}
}

document.querySelector('.check').addEventListener('click', x);
document.querySelector('.again').addEventListener('click', reset);
