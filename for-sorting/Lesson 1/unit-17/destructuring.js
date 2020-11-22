const user = {
    firstName: 'Vasya',
    age: 33,
    'last name': 'Ivanov',
    occupation: 'carpenter'
};

const firstName = user.firstName;
const userAge = user.age;
const lastName = user['last name'];

// or...

const {
    firstName, 
    age: userAge,
    'last name': lastName,
    children = [],
    ...restUser
} = user;

console.log(restUser); // { occupation: 'carpenter' }

const [name, lastName, ...other] = ['Vasya', 'Ivanon', 33, 'carpenter'];

func(user);

function func({
    firstName, 
    age: userAge,
    'last name': lastName, 
}) {
    // ...
}
