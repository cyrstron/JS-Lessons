const object = {a: 1};
const emptyObject = {};
const constructedObject = new Object();
const multiKeysObj = {
    a: 1,
    b: 2,
    c: 3,
};

multiKeysObj.d = 4;

console.log(multiKeysObj.d); // 4

const user = {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    age: 33,
    isAdmin: false,
    details: {
        car: null,
    }, 
};

const firstName = user.firstName; // 'Vasya'
const lastName = user['lastName']; // 'Pupkin'
const dog = user.dog; // undefined

const admin = user;

admin.isAdmin = true;
console.log(admin.isAdmin); // true
console.log(user.isAdmin); // true
