let greeting = 'Hello!';

function sayHi() {
    console.log(greeting);
}

sayHi(); // Hello!

greeting = 'Hi!';

sayHi(); // Hi!

function sayHi() {
    console.log(greeting);
}

function greetOnSuccess(isSuccess, sayHi) {
    let greeting = 'Hi';

    if (!isSuccess) return;

    sayHi();
}

let greeting = 'Hello';

greetOnSuccess(true, sayHi); // Hello

function createGreeter() {
    const greeting = 'Hello';
    
    return function () {
        console.log(greeting);
    }
}

const sayHi = createGreeter();

const greeting = 'Hi';

sayHi(); // Hello

function createGreeter(greeting) {
    return function () {
        console.log(greeting);
    }
}

let greeting = 'Hello!';

const sayHi = createGreeter(greeting);

greeting = 'Hi!';

sayHi(); // Hello!
