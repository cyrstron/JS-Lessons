const array1 = [1];

array1[9] = 10;

console.log(array1); // [1, empty x 8, 10]
console.log(array1.length); // 10

const array2 = [1];

array2['abc'] = 10;

console.log(array2); // [1, abc: 10]

