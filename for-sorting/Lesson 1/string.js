const singleQuoteString = 'Hello world!';
const doubleQuoteString = "Hello world!";
const backTicksString = `Hello
world!`; // Can be multiline!
const emptyString = '';

const multilineString = "Hello \
world!";
const mixedQuotes = "It's greeting!";
const escapedQuotes = "It\"s greeting!";
const stringTemplate1 = `I have ${2} eyes!`;
const stringTemplate2 = `I have ${1 + 1} eyes!`;

let eyesNumber = 2;
const stringTemplate2 = `I have ${eyesNumber} eyes!`;

const lenght = 'Hello!'.length; // 6
const stringLower = 'Hello!'.toLowerCase(); // 'hello!'
const stringUpper = 'Hello!'.toUpperCase(); // 'HELLO!'
const charIndex = 'Hello!'.indexOf('e'); // 1
const char = 'Hello'[1]; // 'e'
