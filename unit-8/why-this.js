let user = {
    name: 'Vasya',
    sayHi() {
        alert(`Hi, I'm ${user.name}!`);
    },
}

user.sayHi(); // Hi. I'm Vasya!

const admin = user;

user = null;

admin.sayHi(); // Error!
