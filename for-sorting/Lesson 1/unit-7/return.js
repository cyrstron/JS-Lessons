function sum(a, b) {
    return a + b;
}

const value1 = sum(2, 3); // 5

function calc(a, b, op) {
    if (op === '+') {
        return a + b;
    } else if (op === '*') {
        return a * b;
    } else {
        alert(`Operation "${op}" is not supported!`);
    }
}

const value2 = calc(2, 3, '+'); // 5
const value3 = calc(2, 3, '*'); // 6

function greetUser(user, greeting) {
    if (!user || !greeting) return;

    alert(`${greeting}, ${user}!`);
}

greetUser('Vasya'); // ...
greetUser(); // ...
greetUser('Vasya', 'Hello'); // Hello, Vasya!
