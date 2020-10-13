const array1 = new Array(); // [];
const array2 = [];

const numbers = [1, 2, 3];
const stuff = [
    true,
    undefined,
    'string',
    {name: 'Vasya'},
    [1, 2, 3],
];

const fruits = ['Apple', 'Peer', 'Banana'];

console.log(fruits[0]); // Apple;
console.log(fruits[1]); // Peer;
console.log(fruits[2]); // Banana;

fruits[1] = 'Pineapple';

console.log(fruits); // ['Apple', 'Pineapple', 'Banana'];
console.log(fruits.length); // 3

fruits[3] = 'Orange';

console.log(fruits); /*
 ['Apple', 'Pineapple', 'Banana', 'Orange'];
*/
console.log(fruits.length); // 4
