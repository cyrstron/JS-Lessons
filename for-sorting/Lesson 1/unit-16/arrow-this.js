const user1 = {
    name: 'Vasya',
    sayHiDelayed() {
        setTimeout(function () {
            console.log(`Hi, I'm ${this.name}`);
        }, 1000);
    }
}

const user2 = {
    name: 'Vanya',
    sayHiDelayed() {
        setTimeout(() => {
            console.log(`Hi, I'm ${this.name}`);
        }, 1000);
    }
}

user1.sayHiDelayed(); // Error!
user2.sayHiDelayed(); // Hi, I'm Vanya!
