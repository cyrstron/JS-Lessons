const hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
};
  
const speedy = {
    __proto__: hamster
};
  
const lazy = {
    __proto__: hamster
};
  
speedy.eat("apple");

console.log( speedy.stomach ); // [apple]
console.log( lazy.stomach ); // [apple]
