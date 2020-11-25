function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

User.prototype.sayHi = function () {
    console.log(`Hi, I'm ${this.firstName}!`);
}

function Employee(firstName, lastName, occupation) {
    // apply User props to Employee instance
    User.call(this, firstName, lastName);

    this.occupation = occupation;
}

// create prototype chain
Employee.prototype = Object.create(User.prototype);

// add constructor to prototype
Employee.prototype.constructor = Employee;

Employee.prototype.work = function () {
    console.log(`${this.occupation} ${this.firstName} is working...`);
};

const employee = new Employee('Vasya', 'Ivanov', 'CEO');

employee.sayHi(); // Hi, I'm Vasya!
employee.work(); // CEO Vasya is working...
