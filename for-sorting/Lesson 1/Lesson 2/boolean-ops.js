const value1 = true || true; // true
const value2 = false || true; // true
const value3 = true || false; // true
const value4 = false || false; // false

const value5 = true && true; // true
const value6 = false && true; // false
const value7 = true && false; // false
const value8 = false && false; // false

const value9 = !false; // true
const value10 = !true; // false
const value10 = !!true; // true
const value10 = !!false; // false
