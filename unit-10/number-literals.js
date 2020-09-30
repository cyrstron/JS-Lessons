const num1 = 1000000;
const num3 = 123.45;
const num2 = 1e6; // 1000000
const num2 = 1e-6; // 0.000001
const num2 = 1.2e6; // 1200000

const hexNum = 0xfff; // 4095
const octNum = 0o321; // 209
const binNum = 0b101; // 5

const numStrDec = 123..toString(); // '123'
const numStrBin = 5..toString(2); // '101'
const numStrOct = 209..toString(0); // '321'
const numStrOct = 4095..toString(16); // 'fff'
const numStrOct = 4095..toString(32); // '3vv'
