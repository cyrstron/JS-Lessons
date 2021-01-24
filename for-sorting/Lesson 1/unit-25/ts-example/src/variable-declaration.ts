const num = 1; // number
const srt = '1'; // string
const bool = false; // boolean;
const obj = {}; // {}
const arr = []; // any[]

let anyValue: any;
let num2: number;
let str2: string;
let bool2: boolean;
let arr2: number[];

num2 = 1; // OK
// Type 'string' is not assignable to type 'number'.
num2 = '1';

str2 = 'abc'; // OK
// Type 'number' is not assignable to type 'string'.
str2 = 1;

bool2 = true; // OK
// Type 'number' is not assignable to type 'boolean'.
bool2 = 0;

arr2 = [1]; // OK
// Type 'string' is not assignable to type 'number'.
arr2 = ['1', 1];
