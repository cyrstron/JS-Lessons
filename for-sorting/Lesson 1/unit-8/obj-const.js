const user = {name: 'Vasya'};

user.name = 'Vanya';

console.log(user.name); // 'Vanya'

user = {name: 'Vasya'}; // Error!
