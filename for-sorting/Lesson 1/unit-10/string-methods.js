const value1 = 'Hello world!';

console.log(value1.length); // 12
console.log(value1[0]); // 'H'
console.log(value1[5]); // ' '
console.log(value1[999]); // undefined

const value2 = 'Hello world!'.toLowerCase(); // 'hello world!'
const value3 = 'Hello world!'.toUpperCase(); // 'HELLO WORLD!'

const index1 = 'Hello world!'.indexOf('world'); // 6
const index2 = 'Hello world!'.indexOf('abc'); // -1
const index3 = 'Hello world-world-world!'.indexOf('world', 10); // 12

const value4 = 'Hello world!'.includes('Hello'); // true
const value5 = 'Hello world!'.includes('Hello', 5); // false
const value6 = 'Hello world!'.includes('abc'); // false

const value7 = 'Hello world!'.startsWith('Hell'); // true
const value8 = 'Hello world!'.endsWith('world!'); // true

const value8 = 'Hello world!'.slice(6, 11); // 'world'
const value8 = 'Hello world!'.slice(6, -1); // 'world'
const value8 = 'Hello world!'.slice(6); // 'world!'
