const user = {
    name: 'Vasya',
    age: 33,
    permissions: {
        canRead: true,
        canWrite: false,
    },
}

const user2 = Object.assign({}, user);

user2.name = 'Vanya';
console.log(user.name); // 'Vasya'

user2.permissions.canWrite = true;
console.log(user.permissions.canWrite); // true. Oops!
console.log(user.permissions === user2.permissions); // true
