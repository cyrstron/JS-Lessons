function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

User.prototype.sayHi = function () {
    console.log(`Hi, I'm ${this.firstName}!`);
}

const user1 = new User('Vasya', 'Ivanov');
const user2 = new User('Vanya', 'Vasyliev');

user1.sayHi(); // Hi, I'm Vasya!
user2.sayHi(); // Hi, I'm Vanya!

console.log(user1.sayHi === user2.sayHi); // true
console.log(user1.__proto__ === user2.__proto__); // true
console.log(user1.constructor === User); // true
