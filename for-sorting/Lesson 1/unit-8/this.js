const user = {
    name: 'Vasya',
    age: 30,
    sayHi() {
        alert(`Hi, I'm ${this.name}!`);
    },
}

user.sayHi(); // Hi, I'm Vasya!
