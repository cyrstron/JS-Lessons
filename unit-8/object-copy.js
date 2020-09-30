const user = {
    name: 'Vasya',
    age: 33,
    isAdmin: true,
}

const user2 = Object.assign({}, user);
const user3 = {...user};

user2.name = 'Vanya';
user3.name = 'Vladya';

console.log(user.name); // 'Vasya'

const userInfo = {name: 'Vasya'};
const userDetails = {
    age: 33,
    isAdmin: true,
};

const mergedObj = Object.assign({}, userInfo, userDetails);
// {name: 'Vasya', age: 33, isAdmin: true}

const mergedObj2 = {
    ...userInfo,
    ...userDetails,
}; // {name: 'Vasya', age: 33, isAdmin: true}

const mergedObj3 = Object.assign(userInfo, userDetails);

console.log(userInfo.age); // 33
