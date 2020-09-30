isFinite(1); // true
isFinite(1e9); // true
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite('string'); // false

NaN === NaN; // false
isNaN(NaN); // true
isNaN('string'); // true

const num1 = +'123.456abc'; // NaN
const num2 = parseInt('123.456abc'); // 123
const num3 = parseFloat('123.456abc'); // 123.456
const num4 = parseInt('string'); // NaN
const num5 = parseFloat('string'); // NaN
