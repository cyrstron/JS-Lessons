const array1 = [1, 2];

const array2 = array1.concat([3, 4]);
console.log(array2); // [1, 2, 3, 4]

const array3 = array1.concat([3, 4], [5, 6]);
console.log(array3); // [1, 2, 3, 4, 5, 6]

const array4 = array1.concat([3, 4], 5, 6);
console.log(array4); // [1, 2, 3, 4, 5, 6]

console.log(array1); // [1, 2]
