function greetUser(user, greeting) {
    alert(`${greeting}, ${user}!`);
}

greetUser('Vasya', 'Hello'); // Hello, Vasya!
greetUser('Vanya', 'Hi'); // Hi, Vanya!
greetUser('Vasya'); // undefined, Vasya!

let greeting = 'Hello';

function greet(greeting) {
    greeting += '!!!';

    alert(greeting);
}

greet(greeting); // Hello!!!
console.log(greeting); // Hello
