const user = {
    firstName: 'Vanya',
    lastName: 'Ivanov',
    get title() {
        return `${this.firstName} ${this.lastName}`;
    },
    set title(value) {
        const [firstName, lastName] = value.split(' ');

        this.firstName = firstName;
        this.lastName = lastName;
    }
}

console.log(user.title); // 'Vanya Ivanov'

user.firstName = 'Vasya';

console.log(user.title); // 'Vasya Ivanov'

user.title = 'Albert Einstein';

console.log(user.firstName); // 'Albert';
console.log(user.lastName); // 'Einstein';
