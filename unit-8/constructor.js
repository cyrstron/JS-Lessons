function User(name, age) {
    // this = {}; (implicitly)

    this.name = name;
    this.age = age;

    // return this; (implicitly)
}

function User(name, age) {
    this.name = name;
    this.age = age;

    this.sayHi = function () {
        alert(`Hi, I'm ${this.name}!`);
    }
}

const user = new User('Vasya', 33);
