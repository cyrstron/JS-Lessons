const array = [1, 2, 3];

const value1 = array.pop();
console.log(value1); // 3
console.log(array); // [1, 2]

array.push(3);
console.log(array); // [1, 2, 3]

array.push(4, 5);
console.log(array); // [1, 2, 3, 4, 5]

const value2 = array.shift();
console.log(value2); // 1
console.log(array); // [2, 3, 4, 5]

array.unshift(1);
console.log(array); // [1, 2, 3, 4, 5]

array.unshift(9, 0);
console.log(array); // [9, 0, 1, 2, 3, 4, 5]
