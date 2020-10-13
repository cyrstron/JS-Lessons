const array = [1, 2, 3, 4, 5];
const array2 = array;

array2.pop();

console.log(array); // [1, 2, 3, 4]
console.log(array2); // [1, 2, 3, 4]

array[1] = 9;

console.log(array); // [1, 9, 3, 4]
console.log(array2); // [1, 9, 3, 4]
