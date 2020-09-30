sayHiDeclaration(); // Hi!

function sayHiDeclaration() {
    alert('Hi!');
}

sayHiDeclaration(); // Hi!

sayHiExpression(); // Error!

const sayHiExpression = function () {
    alert('Hi!');
}

sayHiExpression(); // Hi!
