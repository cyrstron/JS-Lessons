console.log(typeof []); // 'object'

const array = []
console.log(array === []); // false
console.log(array == []); // false
console.log(array === array); // true

console.log([].toString()); // ''
console.log([1].toString()); // '1'
console.log([1, 2, 3].toString()); // '1,2,3'

console.log([] == ''); // true
console.log([] == true); // false
console.log([] == false); // true
console.log([] ? true : false); // true

console.log([1] == [1]); // false
console.log([1] == 1); // true

console.log([1, 2] == [1, 2]); // false
console.log([1, 2] == '1,2'); // true
