function askQuestion(onCorrectAnswer, onWrongAnswer) {
    const answer = prompt('2 x 2?', '');

    if (+answer === 4) {
        onCorrectAnswer();
    } else {
        onWrongAnswer();
    }
}

askQuestion(
    function () {
        alert('Good job!');
    }, 
    function () {
        alert('Wrong!');
    },
);
