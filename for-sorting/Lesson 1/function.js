function sayHi() {
    alert('Hi!');
}

sayHi(); // Hi!

function sayHiToUser(user) {
    alert(`Hi ${user}!`);
}

sayHiToUser('Vasya'); // Hi Vasya!

const GREETING = 'Good day';

function greetUser(user) {
    const greetMessage = `${GREETING} ${user}`;

    alert(greetMessage);
}

sayHiToUser('Vasya'); // Good day Vasya!

function sum(a, b) {
    return a + b;
}

const value = sum(2, 3); // 5
