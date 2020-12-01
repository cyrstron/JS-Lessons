function EmployeeOld(firstName, lastName, occupation) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.occupation = occupation;
}

UserOld.prototype.sayHi = function () {
    console.log(`Hi, I'm ${this.firstName}`);
}

UserOld.prototype.work = function () {
    console.log(`${this.occupation} is working...`);
}

class EmployeeNew {
    constructor(firstName, lastName, occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;
    }

    sayHi() {
        console.log(`Hi, I'm ${this.firstName}`);
    }

    work() {
        console.log(`${this.occupation} is working...`);
    }
}

console.log(typeof EmployeeNew); // 'function'
console.log(EmployeeNew.prototype.sayHi); // function sayHi() {...}
console.log(EmployeeNew.prototype.constructor === EmployeeNew); // true
