class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        console.log(`Hi, I'm ${this.firstName}!`);
    }
}

class User {
    constructor(firstName, lastName, occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;
    }

    sayHi() {
        console.log(`Hi, I'm ${this.firstName}!`);
    }

    work() {
        if (!this.occupation) {
            throw new Error('This user is not employee!');
        }

        console.log(`${this.occupation} ${this.firstName} is working...`);
    }
}

class Employee extends User {
    constructor(firstName, lastName, occupation) {
        super(firstName, lastName);

        this.occupation = occupation;
    }

    work() {        
        console.log(`${this.occupation} ${this.firstName} is working...`);
    }
}
