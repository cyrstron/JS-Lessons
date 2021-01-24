type Direction = 'ascending' | 'descending';

// Type '"lala"' is not assignable to type 'Direction'.
const dir1: Direction = 'lala';
const dir2: Direction = 'descending';

type WheelsNumber = 2 | 4 | 8;

// Type '3' is not assignable to type 'WheelsNumber'.
const wheelsNum1: WheelsNumber = 3;
const wheelsNum2: WheelsNumber = 4;

interface Person {
    firstName: string;
    lastName: string;
}

interface User {
    userName: string;
    isOnline: boolean;
}

type UserOrPerson = Person | User;

// Type '{ userName: string; lastName: string; }' is not assignable to type 'UserPerson'.
// Property 'isOnline' is missing in type '{ userName: string; lastName: string; }' 
// but required in type 'User'.
const userPerson: UserOrPerson = { userName: 'PUNISHER123', lastName: 'Ivanov'};
const userPerson2: UserOrPerson = { firstName: 'Vasya', lastName: 'Ivanov'};

type UserAndPerson = Person & User;

const userAndPerson: UserAndPerson = {
    userName: 'PUNISHER123', 
    lastName: 'Ivanov', 
    firstName: 'Vasya', 
    isOnline: true,
}

export {}