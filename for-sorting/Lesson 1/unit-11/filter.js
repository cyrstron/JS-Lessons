const array = [1, 2, 3, 4, 5, 6];

const evens = array.filter((num) => !(num % 2));

console.log(evens); // [2, 4, 6];

const people = [
    {name: 'Vasya', gender: 'male'},
    {name: 'Dunya', gender: 'female'},
    {name: 'Vanya', gender: 'male'},
    {name: 'Dusya', gender: 'female'},
];

const guys = people.filter(
    (person) => person.gender === 'male'
);
const girls = people.filter(
    (person) => person.gender === 'female'
);
