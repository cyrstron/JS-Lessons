const User = class {
    constructor(name) {
        this.name = name;
    }
}

const User2 = class MyClass {
    constructor(name) {
        this.name = name;
    }
}

function createUserClass() {
    return class {
        constructor(name) {
            this.name = name;
        }
    }
}

const User3 = createUserClass();

const user = new User3('Vasya');
