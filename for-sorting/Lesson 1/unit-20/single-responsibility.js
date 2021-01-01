class ValidatedUser {
    constructor(firstName, lastName) {
        const firstNameError = this._validateFirstName(firstName);

        if (firstNameError) throw firstNameError;

        this.firstName = firstName;

        const lastNameError = this._validateLastName(lastName);

        if (lastNameError) throw lastNameError;

        this.lastName = lastName;
    }

    _validateFirstName(firstName) {
        if (firstName.length < 2) {
            return new Error('First name is too short');
        }
        if (firstName.length > 256) {
            return new Error('First name is too long');
        }
        if (firstName[0].toUpperCase() !== firstName[0]) {
            return new Error('First name should start from capital letter');
        }
    }

    _validateLastName(lastName) {
        if (lastName.length < 3) {
            return new Error('Last name is too short');
        }
        if (lastName.length > 256) {
            return new Error('Last name is too long');
        }
        if (lastName[0].toUpperCase() !== firstName[0]) {
            return new Error('Last name should start from capital letter');
        }
    }

    sayHi() {
        console.log(`Hi, I'm ${this.firstName} ${this.lastName}`)
    }
}


class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        console.log(`Hi, I'm ${this.firstName} ${this.lastName}`)
    }
}

class UserValidator {
    validateFirstName(firstName) {
        if (firstName.length < 2) {
            return new Error('First name is too short');
        }
        if (firstName.length > 256) {
            return new Error('First name is too long');
        }
        if (firstName[0].toUpperCase() !== firstName[0]) {
            return new Error('First name should start from capital letter');
        }
    }

    validateLastName(lastName) {
        if (lastName.length < 3) {
            return new Error('Last name is too short');
        }
        if (lastName.length > 256) {
            return new Error('Last name is too long');
        }
        if (lastName[0].toUpperCase() !== firstName[0]) {
            return new Error('Last name should start from capital letter');
        }
    }
}

class UserService {
    constructor() {
        this._validation = new UserValidator();
    }

    createUser(firstName, lastName) {
        const err = this._validation.validateFirstName(firstName) || 
            this._validation.validateLastName(lastName);

        if (err) throw err;

        return new User(firstName, lastName)
    }
}
