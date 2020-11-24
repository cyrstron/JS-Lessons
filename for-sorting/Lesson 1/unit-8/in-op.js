const user = {
    name: 'Vasya',
    age: 33,
    nickname: undefined,
};

console.log('name' in user); // true
console.log('lastName' in user); // false

if (user.name !== undefined) {
    console.log(user.name); // 'Vasya'
}

if (user.nickname !== undefined) { // Won't work
    console.log(user.nickname); // ...
}

if ('nickname' in user) {
    console.log(user.nickname); // undefined
}

const key = 'name';

if (key in user) {
    console.log(user.name); // 'Vasya'
}
