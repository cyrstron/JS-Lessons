const obj1 = {};
const obj2 = {};

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false

const obj3 = {a: 1};
const obj4 = {a: 1};

console.log(obj3 == obj4); // false
console.log(obj3 === obj4); // false

const obj5 = {};
const obj6 = obj5;

console.log(obj5 == obj6); // true
console.log(obj5 === obj6); // true

obj5.a = 1;

console.log(obj5 == obj6); // true
console.log(obj5 === obj6); // true
console.log(obj5.a); // 1
console.log(obj6.a); // 1

