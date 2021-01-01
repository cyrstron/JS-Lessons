function UserOld(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

UserOld.prototype.sayHi = function () {
    console.log(`Hi, I'm ${this.firstName}!`);
}

function EmployeeOld(firstName, lastName, occupation) {
    UserOld.call(this, firstName, lastName);

    this.occupation = occupation;
}

EmployeeOld.prototype = Object.create(User.prototype);

EmployeeOld.prototype.constructor = EmployeeOld;

EmployeeOld.prototype.work = function () {
    console.log(`${this.occupation} ${this.firstName} is working...`);
};

const employee = new EmployeeOld('Vasya', 'Ivanov', 'CEO');

employee.sayHi(); // Hi, I'm Vasya!
employee.work(); // CEO Vasya is working...

class UserNew {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        console.log(`Hi, I'm ${this.firstName}!`);
    }
}

class EmployeeNew extends UserNew {
    constructor(firstName, lastName, occupation) {
        super(firstName, lastName);

        this.occupation = occupation;
    }

    work() {        
        console.log(`${this.occupation} ${this.firstName} is working...`);
    }
}

const employeeFromClass = new EmployeeNew('Vasya', 'Ivanov', 'CEO');

employeeFromClass.sayHi(); // Hi, I'm Vasya!
employeeFromClass.work(); // CEO Vasya is working...
