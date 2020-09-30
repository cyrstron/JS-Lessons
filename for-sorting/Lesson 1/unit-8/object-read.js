const person = {
    name: 'Vasya',
    'current age': 33,
    prop: {
        a: 3,
        b: 4,
    },
};

const value1 = person.name; // 'Vasya'
const value2 = person['current age']; // 33

const key = 'name';

const value3 = person[key]; // object.key -> undefined
const value4 = person.prop2; // undefined

const value5 = person.prop.a; // 3
const value6 = person.prop2.a; // Error!
const value7 = person.prop2?.a; // undefined
const value8 = person.prop2?.['a']; // undefined
