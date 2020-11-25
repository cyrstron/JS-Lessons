const user = {
    firstName: 'Vasya',
    lastName: 'Ivanov',
    age: 33,
};

console.log(`${user}`); // [object Object]
console.log(+user); // NaN

const user2 = {
    firstName: 'Vanya',
    lastName: 'Vasyliev',
    age: 33,
    [Symbol.toPrimitive](hint) {
        return hint === 'string' ? 
            `${this.firstName} ${this.lastName}` :
            this.age;
    },
};

console.log(`${user2}`); // 'Vanya Vasyliev'
console.log(+user2); // 33
