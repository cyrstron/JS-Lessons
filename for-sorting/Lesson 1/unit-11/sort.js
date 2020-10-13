const array1 = [1, 5, 2, 4, 3];

const result = array1.sort((a, b) => {
    return a < b ? -1 : 1;
});

console.log(array1); // [1, 2, 3, 4, 5]
console.log(result); // [1, 2, 3, 4, 5]
console.log(array1 === result); // [1, 2, 3, 4, 5]

const array2 = [1, 5, 9, 10, 15];

array2.sort();

console.log(array2); // [1, 10, 15, 5, 9]

const array = [1, 2, 3, 4, 5];

array.reverse();

console.log(array); // [5, 4, 3, 2, 1]
