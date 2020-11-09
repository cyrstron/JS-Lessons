"use strict"

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

let doPlayAgain = true;

while (doPlayAgain) {
    playGame();

    doPlayAgain = confirm('Game over. Would you like to play again?');
}

function getRandomValue() {
    return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER)) + MIN_NUMBER + 1;
}

function isNumberValid(number) {
    return !isNaN(number) && number >= MIN_NUMBER && number <= MAX_NUMBER;
}

function requestUserNumber(tipMessage) {
    let userNumber;
    let isValid
    
    while (!isValid) {
        if (tipMessage) alert(tipMessage);

        const inputValue = prompt(`Enter number from ${MIN_NUMBER} to ${MAX_NUMBER}`, '');

        if (inputValue === null) return inputValue;

        userNumber = parseInt(inputValue);
        
        isValid = isNumberValid(userNumber);

        if (!isValid) alert('Invalid value!');
    }

    return userNumber;    
}

function playGame() {
    const secretNumber = getRandomValue(MIN_NUMBER, MAX_NUMBER);

    let userNumber;
    let tipMessage;

    while(secretNumber !== userNumber) {
        userNumber = requestUserNumber(tipMessage);

        if (userNumber === null) break;

        if (userNumber > secretNumber) {
            tipMessage = 'Try less!';
        } else if (userNumber < secretNumber) {
            tipMessage = 'Try more!'
        } else {
            alert('Congrats!');
        }
    }
}