const user = {
    name: 'Vasya',
    surname: 'Ivanov',
    sayHi() {
        console.log(`Hi, I'm ${this.name} ${this.surname}!`);
    }
}

setTimeout(user.sayHi, 1000); // Error!

setTimeout(function () {
    user.sayHi(); // Hi, I'm Vasya Ivanov!
})

setTimeout(user.sayHi.bind(user), 1000);
// Hi, I'm Vasya Ivanov!
