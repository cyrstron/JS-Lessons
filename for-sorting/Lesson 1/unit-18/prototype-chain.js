const animal = {
    walk() {
        console.log('Walking...');
    }
}

const dog = {
    bark() {
        console.log('Woof!');
    },
    __proto__: animal,
}

const shepherd = {
    name: 'Jack',
    __proto__: dog,
}

shepherd.walk(); // Walking...
shepherd.bark(); // Woof!
