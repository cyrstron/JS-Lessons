slice(startIndex, endIndex);

const array = [1, 2, 3, 4, 5, 6];

console.log(array.slice(1, 4)); // [2, 3, 4]
console.log(array.slice(1, -1)); // [2, 3, 4, 5]
console.log(array.slice(3)); // [4, 5, 6]

const arrayCopy = array.slice();

console.log(arrayCopy); // [1, 2, 3, 4, 5, 6]
console.log(arrayCopy === array); // false

console.log(array); // [1, 2, 3, 4, 5, 6]
