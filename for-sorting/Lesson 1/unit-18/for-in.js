const animal = {
    eats: true,
    walk() {
        console.log(`${this.name} walks...`);
    }
};

const rabbit = {
    name: 'Fluffy',
    jumps: true,
    __proto__: animal,
};

for (let key in rabbit) {
    console.log(key); // name, jumps, eats, walk    
}

console.log(Object.keys(rabbit)); // ['name', 'jumps']
