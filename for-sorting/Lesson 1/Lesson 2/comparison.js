const value1 = 10 > 2; // true
const value2 = 10 < 2; // false
const value3 = 10 >= 2; // true
const value4 = 10 <= 2; // false

const value5 = 1 == 1; // true
const value6 = 1 == '1'; // true
const value7 = 1 === 1; // true
const value8 = 1 === '1'; // false

const value5 = 1 != 1; // false
const value6 = 1 != '1'; // false
const value7 = 1 !== 1; // false
const value8 = 1 !== '1'; // true

const value9 = 10 > '9'; // true
const value10 = false < true; // true
const value11 = 1 > NaN; // false
const value12 = 1 <= NaN; // false
const value13 = NaN >= NaN; // false

const value14 = 'Cat' > 'Dog'; // false
const value15 = 'cat' > 'Dog'; // true

const value16 = 1 == 2; // false
const value17 = 1 == '  01 \n'; // true
const value18 = 1 == true; // true
const value19 = 0 == ''; // true
const value20 = 0 == '0'; // true
const value21 = false == ''; // true
const value22 = false == '0'; // false

const value23 = null == 0; // false
const value24 = null >= 0; // true
