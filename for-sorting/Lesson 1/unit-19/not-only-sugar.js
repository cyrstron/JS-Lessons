class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hi, I'm ${this.name}`);
    }
} 

User('Vasya'); // Error!

const user = new User('Vasya');

for (let key in user) {
    console.log(key); // 'name'
}

value = 123; // Error!
