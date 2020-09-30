const user1 = {name: 'Vasya'};
const user2 = user1;

user1.name = 'Vanya';

console.log(user1.name); // 'Vanya'
console.log(user2.name); // 'Vanya'

const source = {
    nestedProp: { a: 1 },
    b: 2,
}

const dest = {};

dest.c = source.nestedProp;

dest.c.a = 2;

console.log(source.nestedProp.a); // 2
