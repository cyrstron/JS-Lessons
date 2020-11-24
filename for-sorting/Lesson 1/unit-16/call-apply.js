function sayHi(greeting) {
    console.log(`${greeting}, ${this.name}!`);
}

const user = {
    name: 'Vasya',
}

sayHi.call(user, 'Hello'); // Hello, Vasya!
sayHi.apply(user, ['Hi']); // Hi, Vasya!

[].forEach.call('abc', (item) => {
    console.log(item); // a, b, c
});
