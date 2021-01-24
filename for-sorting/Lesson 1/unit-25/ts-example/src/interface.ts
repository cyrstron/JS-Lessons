interface UserInterface {
    readonly firstName: string;
    readonly lastName: string;
    age: number;
    sayHi(): void;
}

const user: UserInterface = {
    firstName: 'Vasya',
    lastName: 'Ivanov',
    age: 33,
    sayHi() {},
}

// Cannot assign to 'firstName' because it is a read-only property.
user.firstName = 'Vanya';

interface EmployeeInterface extends UserInterface {
    occupation: string;
}

export class Person implements UserInterface {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        public INN?: number,
        public passportId?: number,
    ) {}

    sayHi() {
        console.log(`Hi, ${this.firstName}!`);
    }
}

// Class 'User' incorrectly implements interface 'UserInterface'.
//  Type 'User' is missing the following properties from type 'UserInterface': age, sayHi
export class User implements UserInterface {
    constructor(
        public userName: string,
        public firstName: string,
        public lastName: string,
    ) {}
}
