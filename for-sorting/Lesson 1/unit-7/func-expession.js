function sayHi1() {
    alert('Hi!');
}

const sayHi2 = function () {
    alert('Hi!');
}

const sayHi3 = sayHi1;

sayHi1(); // Hi!
sayHi3(); // Hi!

console.log(sayHi1); // *function code*

greetUser();

const greet = function greetUser(user) {
    alert(`Hello ${user}!`);
}
