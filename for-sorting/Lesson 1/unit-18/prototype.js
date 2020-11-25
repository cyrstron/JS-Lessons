const animal = {
    eats: true,
    walk() {
        console.log('Walking...');
    }
};

const rabbit = {
    jumps: true
};
  
rabbit.__proto__ = animal;

console.log(rabbit.eats); // true

rabbit.walk(); // Walking...
