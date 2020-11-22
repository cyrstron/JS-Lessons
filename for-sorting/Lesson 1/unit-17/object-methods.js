const obj = {
    a: 1,
    b: 2,
};

const keys = Object.keys(obj); // ['a', 'b']
const values = Object.values(obj); // [1, 2]
const entries = Object.entries(obj); // [['a', 1], ['b', 2]]
const obj2 = Object.fromEntries([
    ['a', 1], 
    ['b', 2],
]); // {a: 1, b: 2}
