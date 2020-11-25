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

rabbit.walk(); // Fluffy walks...
