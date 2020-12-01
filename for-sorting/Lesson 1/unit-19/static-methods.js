function UserOld(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

UserOld.createFromFullName = function (fullName) {
    const [firstName, lastName] = fullName.split(' ');

    return new UserOld(firstName, lastName);
}

const userOld = UserOld.createFromFullName('Vasya Ivanov');

console.log(userOld.name); // Vasya

class UserNew {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static createFromFullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
    
        return new UserNew(firstName, lastName);
    }
}
const userNew = UserNew.createFromFullName('Vanya Vasyliev');

console.log(userNew.name); // Vanya
