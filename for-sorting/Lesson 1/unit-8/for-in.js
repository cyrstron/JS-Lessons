for (let key in obj) {
    // ... loop body
}

const user = {
    name: 'Vasya',
    age: 30,
    isAdmin: true,
};

for (let key in user) {
    console.log(key); // 'name', 'age', 'isAdmin'
    console.log(user[key]); // 'Vasya', 30, true
}
