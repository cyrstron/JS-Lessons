const arr1 = [1, 2, 3];

const arr3 = arr1.slice(); // [1, 2, 3];
const arr2 = [...arr1]; // [1, 2, 3];

const arr4 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
const arr5 = [9, 0, ...arr1]; // [9, 0, 3, 4, 5]

const descArr = [...arr1].sort((a, b) => b - a); // [5, 4, 3, 2, 1]

const pyramidArr = [...arr1, 6 , ...descArr]
// [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]

