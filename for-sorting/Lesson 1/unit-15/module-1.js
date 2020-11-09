let greeting = 'Hello';

const sayHi = (function(greeting) {
    return function () {
        console.log(greeting);
    }
})(greeting);
