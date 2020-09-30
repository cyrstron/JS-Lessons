const user = {
    name: 'Vasya',
    age: 33,
    sayHi: function () {
        alert('Hi!');
    },
    sayBye() {
        alert('Bye!');
    },
}

user.callForHelp = function () {
    alert('Help!');
}

user['sayHi'](); // Hi!
user.sayBye(); // Bye!
user.callForHelp(); // Help!
user.blah?.(); // ...
user.blah(); // Error!
