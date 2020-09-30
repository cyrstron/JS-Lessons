function sayHi() { // Good
    alert('Hi!');
}

function func() { // Bad
    alert('Hi!');
}

function walk() { // VERY BAD!
    alert('Swim!');
}

function greetMultiplyAndNotify(a, b) {   // Bad  
    alert('Hi!');
    alert('We\'re glad to multiple numbers for you!');

    const result = a * b;

    alert(`Result is ${result}.`);
    alert('Have a nice day!');

    return result;
}

function performMultipleSequence(a, b) { // Good
    greet('multiple numbers');

    const result = multiply(a, b);

    sayResult(result);

    return result;
}

function greet(action) {
    alert('Hi!');
    alert(`We\'re glad to ${action} for you!`);
}

function multiply(a, b) {
    return a * b;
}

function renderResult(result) {
    alert(`Result is ${result}.`);
    alert('Have a nice day!');
}
