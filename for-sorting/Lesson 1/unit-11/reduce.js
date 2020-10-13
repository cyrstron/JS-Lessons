reduce(function (result, elem, index, sourceArray) {
    /* */
}, initialValue);

const array = [1, 2, 3, 4, 5];

const sum = array.reduce((result, elem) => result + elem, 0);

console.log(sum); // 15

const users = [
    {name: 'Vasya', age: 30},
    {name: 'Dunya', age: 25},
    {name: 'Vanya', age: 27},
    {name: 'Dusya', age: 27},
];

const usersByAge = users.reduce((usersByAge, user) => {
    if (!usersByAge[user.age]) {
        usersByAge[user.age] = [];
    }

    usersByAge[user.age].push(user.name);

    return usersByAge;
}, {});

console.log(usersByAge); 
/*
{
    '25': ['Dunya'],
    '27': ['Vanya, Dusya'],
    '30': ['Vasya'],
}
*/
