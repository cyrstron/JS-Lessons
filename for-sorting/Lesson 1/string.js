const singleQuoteString = 'Hello world!';

console.log(singleQuoteString[0]); // 'H'
console.log(singleQuoteString[1]); // 'e'
console.log(singleQuoteString.length); // 12

const doubleQuoteString = "Hello world!";
const backTicksString = `Hello
world!`; // Can be multiline!

const stringTemplate1 = `I have ${2} eyes!`;
const stringTemplate2 = `I have ${1 + 1} eyes!`;

let eyesNumber = 2;
const stringTemplate2 = `I have ${eyesNumber} eyes!`;

const stringLower = 'Hello!'.toLowerCase(); // 'hello!'
const stringUpper = 'Hello!'.toUpperCase(); // 'HELLO!'
