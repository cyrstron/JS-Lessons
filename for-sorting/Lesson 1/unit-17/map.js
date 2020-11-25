const map = new Map();

map.set('a', 1);

const key = {b: 2};
const value = {c: 3};

map.set(key, value);

const value = map.get('a'); // 1
const value2 = map.get(key); // {c: 3}

const hasA = map.has('a'); // true
const hasB = map.has('b'); // false

const size = map.size; // 2

map.delete('a');

console.log(map.has('a')); // false

map.clear();

console.log(map.size); // 0

const map2 = new Map([['a', 1], ['b', 2], ['c', 3]]);

const keys = map.keys(); // {'a', 'b', 'c'}
const values = map.values(); // {1, 2, 3}
const entries = map.entries(); // {'a' => 1, 'b' => 2], 'c' => 3}
