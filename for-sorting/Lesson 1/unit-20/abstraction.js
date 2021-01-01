const user = {
    firstName: 'Vasya',
    lastName: 'Ivanov',
    role: 'Admin',
    occupation: 'CEO',
}

function getFullName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function greet(user) {
    console.log(`Hi, I'm ${getFullName(user)}!`);
}

class User {
    constructor(firstName, lastName, role, occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.occupation = occupation;
    }

    get fullName() {
        `${this.firstName} ${this.lastName}`
    }

    greet() {
        console.log(`Hi, I'm ${this.fullName}!`);
    }
}
