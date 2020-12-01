class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    type = 'human';

    ['say' + 'Hi']() {
        console.log(`Hi, I'm ${this.firstName}`);
    }
    
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');

        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User('Vasya', 'Ivanov');

console.log(user.type); // 'human';
console.log(user.__proto__.type); // undefined;

user.sayHi(); // 'Hi, I'm Vasya'

console.log(user.fullName); // 'Vasya Ivanov'

user.fullName = 'Vanya Vasyliev';

console.log(user.name); // 'Vanya'

