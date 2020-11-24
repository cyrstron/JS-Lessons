const set = new Set();

set.set('a');

const value = {b: 2};

set.set(value);

const hasA = set.has('a'); // true
const hasB = set.has('b'); // false

const size = set.size; // 2

set.delete('a');

console.log(set.has('a')); // false

set.clear();

console.log(set.size); // 0

const set2 = new Map(['a', 'a', 'b', 'c', 'c', 'c']);

const keys = map.keys(); // ['a', 'b', 'c']
const values = map.values(); // ['a', 'b', 'c']
const entries = map.entries(); // ['a', 'b', 'c']

const array = [...set2]; // ['a', 'b', 'c']
