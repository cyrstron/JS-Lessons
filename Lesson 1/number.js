const integer = 1;
const float = 1.234;
const infinity = 1 / 0; // Infinity
const nan = 'not a number' * 2; // NaN
const num1 = parseInt('  \n 123blah!'); // 123
const num2 = parseFloat('  \n 123.456blah!'); // 123.456

const binNum = 0b10101; // 21
console.log(binNum.toString(2)); // 10101

const octNum = 0o1242; // 674
console.log(octNum.toString(8)); // 1242

const hexNum = 0xff12aa; // 16716458
console.log(hexNum.toString(16)); // ff12aa

const float2 = 123.456789
console.log(float2.toFixed(2)); // '123.46'
console.log(float2.toFixed(0)); // '123'
console.log(float2.toFixed(7)); // '123.4567890'

const bigInt = 99999999999999999999n;
