class User {}

const user = new User();

console.log(user instanceof User); // true

const notUser = {};

notUser.__proto__ = User.prototype;

console.log(notUser instanceof User); // true

user.__proto__ = null;

console.log(user instanceof User); // false

console.log([] instanceof Array); // true
console.log([] instanceof Object); // true
