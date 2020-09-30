const str1 = String(123); // '123'
const str2 = 123 + ''; // '123'
const str3 = `${123}`; // '123'
const str4 = 1 + '1'; // '11'

const num1 = Number('123'); // 123
const num2 = +'123'; // 123
const num3 = +'  123\n '; // 123
const num4 = +'not a number'; // NaN
const num5 = Number(true); // 1
const num6 = Number(false); // 0
const num7 = Number(undefined); // NaN
const num8 = Number(null); // 0
const num9 = Number(''); // 0
const num10 = Number('  \n'); // 0
const num11 = '6' / '2'; // 3

const bool1 = Boolean(1); // true
const bool2 = Boolean(0); // false
const bool3 = Boolean(''); // false
const bool4 = Boolean(null); // false
const bool5 = Boolean(undefined); // false
const bool6 = Boolean({}); // true
const bool7 = !1; // false
const bool8 = !!1; // true
