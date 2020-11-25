const animal = {
    walk() {
        console.log('Walking...');
    }
}

const dog = {
    bark() {
        console.log('Woof!');
    },
    __proto__: animal
}

dog.walk = () => {
    console.log('Running!');
}

dog.walk(); // Running!
animal.walk(); // Walking...
