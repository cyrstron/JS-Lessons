function name(param1, param1, /*...*/) {
    // some code
}

function sayHi() {
    alert('Hi!');
}

sayHi(); // Hi!
sayHi(); // Hi!

const greeting = 'Hello!';

function greet() {
    alert(greeting);
}

function greetLocal() {
    const localGreeting = 'Hello!';

    alert(localGreeting);
}

console.log(localGreeting); // Error!

function greetReassign() {
    greeting = 'Ola!';

    alert(greeting);
}

console.log(greeting); // 'Hello!'
greetReassign(); // Ola!
console.log(greeting); // 'Ola!'

function greetAssign() {
    const greeting = 'Guten Tag!';

    alert(greeting);

    greeting = 'Guten Abend!';
}

console.log(greeting); // 'Ola!'
greetAssign(); // Guten Tag!
console.log(greeting); // 'Ola!'

const value = 'Alarm!';

function alarm() {
    const value = value;

    alert(value);
}

alarm();
