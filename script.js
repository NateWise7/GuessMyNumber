'use strict';

let messageElement = document.querySelector('.message');
let numberElement = document.querySelector('.number');
let guessElement = document.querySelector('.guess')
let ScoreElement = document.querySelector('.score')
let BodyElement = document.querySelector('body')
let highscoreElement = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;


function lowerScore() {
    ScoreElement.textContent = ScoreElement.textContent - 1 
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(guessElement.value);
    
    if (!guess) {
        messageElement.textContent = 'No number'
    } else if (guess === secretNumber) {
        messageElement.textContent = 'Correct Number!'
        numberElement.textContent = secretNumber;
        BodyElement.style.backgroundColor = '#60b347';

        if (ScoreElement.textContent > highscoreElement.textContent) {
            highscoreElement.textContent = ScoreElement.textContent
        }
    } else if (guess > secretNumber) {
        messageElement.textContent = 'Too High...'
        lowerScore()
    } else if (guess < secretNumber) {
        messageElement.textContent = 'Too Low...'
        lowerScore()
    }
});

document.querySelector('.again').addEventListener('click', function()  {
    messageElement.textContent = 'Start guessing...';
    numberElement.textContent = '?';
    guessElement.value = '';
    ScoreElement.textContent = '20';
    BodyElement.style.backgroundColor = '#333';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
})