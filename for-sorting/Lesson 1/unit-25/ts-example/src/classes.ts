class User {
    private firstName: string;
    private lastName: string;
    protected age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value: string) {
        const [firstName, lastName] = value.split(' ');

        this.firstName = firstName;
        this.lastName = lastName;
    }

    public sayHi(greeting: string = 'Hi'): void {
        console.log(`${greeting}, ${this.fullName}!`);
    }
}

const user = new User('Vasya', 'Ivanov', 33);

user.age; // protected
user.firstName; // private
user.sayHi; // public
user.fullName; // public by default

class Employee extends User {
    someMethod() {
        this.age; // protected
        this.firstName // private
    }
}
