class Employee {
    constructor(firstName, lastName, occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;
    }

    work() {
        console.log(`${this.occupation} is working...`);
    }
}
Í
class Employee {
    constructor(firstName, lastName, occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;
    }

    work() {
        console.log(`${this.occupation} is working HARD!`);
    }
}

class HardcoreEmployee extends Employee {
    work() {
        console.log(`${this.occupation} is working HARD!`);
    }
}
